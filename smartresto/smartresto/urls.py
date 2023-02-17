from django.contrib import admin
from django.urls import include, path

from webcardapio import urls as webcardapio_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(webcardapio_urls))
]
