from django.contrib import admin

from webcardapio.models import Pedido, ProdutosPedido, Produto

# Register your models here.

admin.site.register(Produto)
admin.site.register(ProdutosPedido)
admin.site.register(Pedido)
