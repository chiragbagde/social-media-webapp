from django.db import models

# Create your models here.

class Tweet(models.Model):
    #has got a hiden field id
    content = models.TextField(blank=True, null=True)
    images = models.FileField(upload_to='images/',blank=True, null=True)