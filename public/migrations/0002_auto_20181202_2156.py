# Generated by Django 2.1.3 on 2018-12-02 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proposalrequest',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='proposalrequest',
            name='exchanges',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='proposalrequest',
            name='telegram_id',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
