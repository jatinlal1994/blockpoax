from django.db import models

class ProposalRequest(models.Model):
	id = models.AutoField(primary_key = True)
	token_name = models.CharField(max_length = 200)
	symbol = models.CharField(max_length = 50)
	name = models.CharField(max_length = 200)
	email = models.CharField(max_length = 200)
	telegram_id = models.CharField(max_length = 200, blank = True)
	exchanges = models.CharField(max_length = 200, blank = True)
	description = models.CharField(max_length = 16384, blank = True)
	press_release_national = models.BooleanField()
	press_release_crypto = models.BooleanField()
	press_release_premium = models.BooleanField()
	bounty = models.BooleanField()
	seo = models.BooleanField()
	reviews_listing = models.BooleanField()
	reviews_ico = models.BooleanField()
	facebook = models.BooleanField()
	reddit = models.BooleanField()
	twitter = models.BooleanField()
	youtube = models.BooleanField()

	def __str__(self):
		return self.token_name

class Contact(models.Model):
	id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 200)
	email = models.CharField(max_length = 200)
	number = models.CharField(max_length = 20, blank = True)
	description = models.CharField(max_length = 16384)

	def __str__(self):
		return self.name + ", " + self. email