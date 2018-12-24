from django.urls import path

from api import views as api

urlpatterns = [
    path('get-currencies', api.getCurrencies),
]