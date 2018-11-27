from django.shortcuts import render

def home(request):
	return render(request, 'public/pages/home.html', {})