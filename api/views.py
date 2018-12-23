from django.http import JsonResponse

import hashlib
import hmac
import json

import requests

API_URL = 'https://api.changelly.com'
API_KEY = '56ac72e5fea6480482b31bda7ba30b5c'
API_SECRET = '82782037bef0bda425f8206ff94ed4d5066ace4a38905c131ec74d12a2a0d4df'

def getCurrencies(request):
	message = {
	    'jsonrpc': '2.0',
	    'id': 1,
	    'method': 'getCurrencies',
	    'params': []
	}

	serialized_data = json.dumps(message)

	sign = hmac.new(API_SECRET.encode('utf-8'), serialized_data.encode('utf-8'), hashlib.sha512).hexdigest()

	headers = {'api-key': API_KEY, 'sign': sign, 'Content-type': 'application/json'}
	response = requests.post(API_URL, headers=headers, data=serialized_data)

	return JsonResponse(response.json()['result'])