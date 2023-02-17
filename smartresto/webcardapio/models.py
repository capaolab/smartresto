from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Produto(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='smartresto/src/static/img/img-product')
    is_available = models.BooleanField(default=True)
    people_qt = models.DecimalField(max_digits=2, decimal_places=0)

    def __str__(self):
        return self.name


class Pedido(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.now)
    def __str__(self):
        return str(self.user)

   
class ProdutosPedido(models.Model):
    pedido = models.ForeignKey(Pedido, null=True, blank=True, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.now)
    
    def __str__(self):
        return str(self.produto)

