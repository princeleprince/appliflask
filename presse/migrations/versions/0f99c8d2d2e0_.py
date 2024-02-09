"""empty message

Revision ID: 0f99c8d2d2e0
Revises: bce121e0e002
Create Date: 2024-02-08 22:18:59.030661

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0f99c8d2d2e0'
down_revision = 'bce121e0e002'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('produit', schema=None) as batch_op:
        batch_op.alter_column('prix',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.Integer(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('produit', schema=None) as batch_op:
        batch_op.alter_column('prix',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=20),
               nullable=False)

    # ### end Alembic commands ###
