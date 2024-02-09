from app import db

from datetime import datetime
from flask_login import UserMixin


class User(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    email=db.Column (db.String(60), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f'User({self.username})'

class Produit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(20))
    name = db.Column(db.String(50))
    image = db.Column(db.String(100))
    details = db.Column(db.String(100))
    prix = db.Column(db.Integer)

    def __repr__(self):
        return f'Produit({self.nom_produit})'
    
class Admin(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    email=db.Column (db.String(60), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f'Admin({self.username})'






