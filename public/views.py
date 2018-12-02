from django.shortcuts import render

def home(request):
	return render(request, 'public/pages/home.html', {})

def aboutUs(request):
	return render(request, 'public/pages/about-us.html', {})

def privacyPolicy(request):
	return render(request, 'public/pages/privacy-policy.html', {})

def termsOfService(request):
	return render(request, 'public/pages/terms-of-service.html', {})

def faqs(request):
	return render(request, 'public/pages/faqs.html', {})

def contactUs(request):
	return render(request, 'public/pages/contact-us.html', {})