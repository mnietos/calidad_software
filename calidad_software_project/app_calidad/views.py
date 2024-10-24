from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def login_view(request):
    return render(request, 'login.html')

def registro_view(request):
    return render(request, 'registro.html')
    
def productos_view(request):
    return render(request, 'productos.html')
    
def perfil_view(request):
    return render(request, 'perfil.html')
  
def info_view(request):
    return render(request, 'info.html')
    
def comparador_view(request):
    return render(request, 'comparador.html')
 
def calculadora_view(request):
    return render(request, 'calc.html')
    
def administrador_pagina(request):
    return render(request, 'admin_pag.html')

def sobreNosotros_view(request):
    return render(request, 'sobreNosotros.html')

def valores_view(request):
    return render(request, 'valores.html')

def politicas_view(request):
    return render(request, 'politicas.html')

def terminos_view(request):
    return render(request, 'terminos.html')