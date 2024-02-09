from app import app,db,ALLOWED_EXTENSIONS
from app import forms
from flask import Flask, render_template, url_for, flash, redirect, jsonify,request
from flask_sqlalchemy import SQLAlchemy

from app.models import User,Produit
from flask_bcrypt import Bcrypt
from app.forms import RegistrationForm, LoginForm,FormulaireProduit,ModificationProduitForm

import urllib.request
import os
from werkzeug.utils import secure_filename


bcrypt = Bcrypt(app)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




@app.route('/modifierproduit')
def mod():
    return render_template('modifierproduit.html')

@app.route("/modifier_produit/<int:produit_id>", methods=['POST'])
def modifier_produit_post(produit_id):
    try:
        # Récupérez le produit à partir de la base de données en utilisant l'ID
        produit = Produit.query.get(produit_id)

        # Vérifiez si le produit existe
        if produit:
            # Mettez à jour les attributs du produit avec les données du formulaire
            produit.nom_produit = request.form['nom_produit']
            produit.description = request.form['description']
            produit.prix = float(request.form['prix'])  # Assurez-vous de la conversion correcte

            # Enregistrez les modifications dans la base de données
            db.session.commit()

            # Redirigez l'utilisateur vers la liste des produits ou une autre page
            return render_template("affiche.html")
        else:
            # Gérez le cas où le produit n'existe pas
            return render_template("affiche.html")

    except Exception as e:
        # Gestion générique des erreurs
        print(f"Une erreur s'est produite : {str(e)}")
        return render_template("affiche.html")





@app.route("/supprimer_produit/<int:produit_id>", methods=['POST'])
def supprimer_produit(produit_id):
    produit = Produit.query.get_or_404(produit_id)

    try:
        # Supprimer le produit de la base de données
        db.session.delete(produit)
        db.session.commit()
        flash('Le produit a été supprimé avec succès', 'success')
        return jsonify({'message': 'Suppression réussie'})
    except:
        flash("Une erreur s'est produite lors de la suppression du produit", 'danger')
        return jsonify({'error': 'Erreur lors de la suppression'})

@app.route("/affiche")
def obtenir_liste_produits():
    produits = Produit.query.all()
    liste_produits = []

    for produit in produits:
        produit_info = {
            'id': produit.id,
            'gender': produit.gender,
            'name': produit.name,
            'image': produit.image,
            'details': produit.details,
            'prix':produit.prix
        }
        liste_produits.append(produit_info)

    return render_template('affiche.html',liste_produits=liste_produits)


@app.route("/supprimer_user/<int:user_id>", methods=['POST'])
def supprimer_user(user_id):
    user = User.query.get_or_404(user_id)

    try:
        # Supprime le user de la base de données
        db.session.delete(user)
        db.session.commit()
        flash("L'utilisateur a été supprimé avec succès", 'success')
        return jsonify({'message': 'Suppression réussie'})
    except:
        flash("Une erreur s'est produite lors de la suppression du l'utlisateur", 'danger')
        return jsonify({'error': 'Erreur lors de la suppression'})

@app.route("/gesuti")
def obtenir_liste_users():
    users = User.query.all()
    liste_users = []

    for user in users:
        user_info = {
            'id': user.id,
            'name': user.username,
            
        }
        liste_users.append(user_info)

    return render_template('gesuti.html',liste_users=liste_users)






@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, password=hashed_password)
        db.session.add(user)
       	db.session.commit()
        flash('votre compte est creer!', 'success')
        return  render_template('commande.html')

    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            flash('conexion reussi!', 'success')
            return  render_template('commande.html')
        else:
            flash('ereur', 'danger')
    return render_template('login.html', form=form)



@app.route("/produit", methods=['GET', 'POST'])
def ajouter_produit():
    form = FormulaireProduit()
    if form.validate_on_submit():

        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = 'Articles_'+secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))

        produit = Produit(gender=form.gender.data,name =form.name.data,image=filename, details=form.details.data, prix=form.prix.data)
        db.session.add(produit)
        db.session.commit()
        flash('Le produit a été ajouté avec succès !', 'success')
       
    return render_template('produit.html', title='Ajouter un produit', form=form)


@app.route('/presentation')
def presentation():
    return render_template('boutique.html')





@app.route('/a')
def conexion():
	return render_template('base.html')

@app.route('/b')
def boutique():
	return render_template('boutique.html')


@app.route('/e')
def essaie():
	return render_template('essaie.html')

@app.route('/bs')
def base():
	return render_template('base.html')

@app.route('/t')
def trye():
	return render_template('try.html')

@app.route('/t2')
def tall():
	return render_template('try2.html')

@app.route('/ad')
def admin():
	return render_template('admin.html')

@app.route('/connexion')
def connexion():
	return render_template('connexion.html')

@app.route('/site')
def sit():
	return render_template('site.html')


@app.route('/connect')
def connect():
	return render_template('connect.html')

@app.route('/commande')
def commande():
	return render_template('commande.html')



@app.route('/acceuil')
def acceuil():

    produits = Produit.query.all()
    liste_produits = []

    for produit in produits:
        produit_info = {
            'id': produit.id,
            'gender': produit.gender,
            'name': produit.name,
            'image': produit.image,
            'details': produit.details,
            'prix':produit.prix
        }
        liste_produits.append(produit_info)

    
    return render_template('acceuil.html',liste_produits=liste_produits)

@app.route('/acceui')
def acceui():
    produits = Produit.query.all()
    liste_produits = []

    for produit in produits:
        produit_info = {
            'id': produit.id,
            'gender': produit.gender,
            'name': produit.name,
            'image': produit.image,
            'details': produit.details,
            'prix':produit.prix
        }
        liste_produits.append(produit_info)
    return render_template('acceui.html',liste_produits=liste_produits)

@app.route('/panier')
def panier():
    produits = Produit.query.all()
    liste_produits = []

    for produit in produits:
        produit_info = {
            'id': produit.id,
            'gender': produit.gender,
            'name': produit.name,
            'image': produit.image,
            'details': produit.details,
            'prix':produit.prix
        }
        liste_produits.append(produit_info)
    return render_template('panier.html',liste_produits=liste_produits)