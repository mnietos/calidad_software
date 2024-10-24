from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('registro/', views.registro_view, name='registro'),
    path('productos/', views.productos_view, name='productos'),
    path('perfil/', views.perfil_view, name='perfil'),
    path('info/', views.info_view, name='info'),
    path('comparador/', views.comparador_view, name='comparador'),
    path('calc/', views.calculadora_view, name='calc'),
    path('administrador_pagina/', views.administrador_pagina, name='administrador_pagina/'),
    path('sobreNosotros/',views.sobreNosotros_view, name= 'sobreNosotros'),
    path('valores/',views.valores_view, name='valores'),
    path('politicas/',views.politicas_view, name='politicas'),
    path('terminos/',views.terminos_view, name= 'terminos')

]