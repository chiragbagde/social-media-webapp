from django.db import models
from django.conf import settings
from django.db import models
import random
from django.db.models import Q
# Create your models here.

User = settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey('tweet', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class TweetQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username__iexact=username)

    def feed(self, user):
        profiles_exists = user.following.exists()
        follower_user_id = []
        if profiles_exists:
            follower_user_id = user.following.values_list("user__id",flat=True)
        return self.filter(
            Q(user__id__in=follower_user_id) |
            Q(user=user)
        ).distinct().order_by("-timestamp")

class TweetManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return TweetQuerySet(self.model, using=self._db)
    
    def feed(self, user):
        return self.get_queryset().feed(user)

class Tweet(models.Model):
    #has got a hiden field id
    parent = models.ForeignKey('self', null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='tweets') #many users can own many tweets but 1 tweet 1 user
    content = models.TextField(blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='likes', blank=True, through=TweetLike)
    images = models.FileField(upload_to='images/',blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    objects = TweetManager()
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