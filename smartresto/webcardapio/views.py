from django.shortcuts import render
from webcardapio.models import Produto



def webcardapio_home(request):
    products = Produto.objects.all()[0:8]
    return render(request, 'menu.html', {'products': products})


