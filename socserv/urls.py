from django.contrib import admin
from django.urls import path

from public import views as public

urlpatterns = [
    path('blockpoax/', admin.site.urls),
    path('', public.home, name='home'),
    path('request-quotation', public.requestQuotation, name="request-quotation"),
    path('request-contact', public.requestContact, name="request-contact"),
    path('about-us', public.aboutUs, name='about-us'),
    path('privacy-policy', public.privacyPolicy, name='privacy-policy'),
    path('terms-of-service', public.termsOfService, name='terms-of-service'),
    path('contact-us', public.contactUs, name='contact-us'),
    path('faqs', public.faqs, name='faqs'),
    path('sitemap.xml', public.sitemap),
]