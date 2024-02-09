from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, EmailField,TextAreaField,FloatField,FileField
from wtforms.validators import DataRequired, Email, Length,EqualTo
from wtforms.widgets import PasswordInput



class RegistrationForm(FlaskForm):

    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    password = PasswordField('Password', validators=[DataRequired()])
    email=EmailField('Email')
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class FormulaireProduit(FlaskForm):
	gender = StringField('genre du produit', validators=[DataRequired(), Length(min=2, max=50)])
	name = StringField('Nom du produit', validators=[DataRequired(), Length(min=2, max=50)])
	image=FileField(name='file',render_kw={'id': 'upload'})
	details = StringField('Description du produit', validators=[DataRequired(), Length(min=2, max=200)])
	prix = FloatField('Prix du produit', validators=[DataRequired()])
	submit = SubmitField('Ajouter le produit')

class ModificationProduitForm(FlaskForm):
    nom_produit = StringField('Nom du Produit', validators=[DataRequired(), Length(min=2, max=50)])
    description = TextAreaField('Description', validators=[DataRequired()])
    prix = FloatField('Prix', validators=[DataRequired()])

class AdminForm(FlaskForm):

    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    password = PasswordField('Password', validators=[DataRequired()])
    email=EmailField('Email',validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')


