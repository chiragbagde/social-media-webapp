from django.db import models
from django.conf import settings
from django.db import models
import random
# Create your models here.

User = settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey('tweet', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Tweet(models.Model):
    #has got a hiden field id
    parent = models.ForeignKey('self', null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, on_delete=models.CASCADE) #many users can own many tweets but 1 tweet 1 user
    content = models.TextField(blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='likes', blank=True, through=TweetLike)
    images = models.FileField(upload_to='images/',blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    @property
    def is_retweet(self):
        return self.parent !=None

    def serialize(self):
        return {
            'id': self.id,
            'content': self.content,
            'likes': random.randint(0,122),
        }