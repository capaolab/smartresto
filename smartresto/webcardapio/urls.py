from django.urls import path
from webcardapio.views import webcardapio_home

app_name = 'webcardapio'

urlpatterns = [
    path('', webcardapio_home, name='home'),
]