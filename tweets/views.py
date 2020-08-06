import random
from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse,Http404,JsonResponse
from django.utils.http import is_safe_url
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Tweet
from .forms import TweetForm
from .serializers import (
        TweetSerializer,
        TweetCreateSerializer,
        TweetActionSerializer,
        )
ALLOWED_HOSTS = settings.ALLOWED_HOSTS


def home_view(request, *args,**kwargs):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, template_name='pages/home.html', context={"username": username}, status=200)

def tweets_list_view(request, *args,**kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweet_id, *args,**kwargs):
    return render(request, "tweets/detail.html", context= {"tweet_id": tweet_id})


'''
WITH PURE DJANGO
'''

'''
def tweet_create_view_pure_django(request,*args, **kwargs):
    """
    REST API CREATE VIEW
    """
    user = request.user
    if not request.user.is_authenticated:
        user = None
        if request.is_ajax():
            return JsonResponse({}, status=401)
        return redirect(settings.LOGIN_URL)
    form = TweetForm(request.POST or None)
    next_url = request.POST.get('next')
    # print('ajax',request.is_ajax())
    if form.is_valid():
        obj = form.save(commit=False)
        # other form logic here
        # after authentication also remember to associate(Foreign Key)
        obj.user = user
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.serialize(), status=201) # 201 == created forms
        if next_url != None and is_safe_url(next_url,ALLOWED_HOSTS):
            return redirect(next_url)
        form = TweetForm() # reinitialised blank form
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors, status=400)
    return render(request,'components/form.html', context={'form':form})

def tweet_list_view_pure_django(request, *args,**kwargs):
    """
    REST API VIEW
    return json data
    """
    qs = Tweet.objects.all()
    tweet_list = [x.serialize() for x in qs]

    data = {
        'isuser':False,
        'response' : tweet_list,
    }

    return JsonResponse(data)

def tweet_detail_view_pure_django(request, tweet_id, *args,**kwargs):
    """
    REST API VIEW
    return json data
    """
    data = {
       'id':tweet_id,
    }
    status = 200
    try:
      obj = Tweet.objects.get(id=tweet_id)
      data['content'] = obj.content
    except:
        data['message'] = 'Not found'
        status = 404
    return JsonResponse(data,status=status)
'''

