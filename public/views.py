from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib import messages

from .models import ProposalRequest

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

def requestQuotation(request):
	if request.method == 'POST':
		token_name = request.POST.get('token-name')
		symbol = request.POST.get('symbol')
		contact_name = request.POST.get('contact-name')
		contact_email = request.POST.get('email')
		telegram_id = request.POST.get('telegram-id')
		exchanges = request.POST.get('exchanges-listed')
		description = request.POST.get('description')
		press_release_national = getBool(request.POST.get('press-release-national'))
		press_release_crypto = getBool(request.POST.get('press-release-crypto'))
		press_release_premium = getBool(request.POST.get('press-release-premium'))
		bounty = getBool(request.POST.get('bounty'))
		seo = getBool(request.POST.get('seo'))
		reviews_listing = getBool(request.POST.get('reviews-listing'))
		reviews_ico = getBool(request.POST.get('review-of-ico'))
		facebook= getBool(request.POST.get('request-facebook'))
		reddit = getBool(request.POST.get('request-reddit'))
		twitter = getBool(request.POST.get('request-twitter'))
		youtube = getBool(request.POST.get('request-youtube'))

		response = ProposalRequest(
			token_name = token_name,
			symbol = symbol,
			name = contact_name,
			email = contact_email,
			telegram_id = telegram_id,
			exchanges = exchanges,
			description = description,
			press_release_national = press_release_national,
			press_release_crypto = press_release_crypto,
			press_release_premium = press_release_premium,
			bounty = bounty,
			seo = seo,
			reviews_listing = reviews_listing,
			reviews_ico = reviews_ico,
			facebook = facebook,
			reddit = reddit,
			twitter = twitter,
			youtube = youtube
		)
		response.save()
		messages.add_message(request, messages.INFO, 'Your response has been sent succesfully')
		return HttpResponseRedirect('/')


def getBool(str):
	if str == 'on':
		return True
	else:
		return False