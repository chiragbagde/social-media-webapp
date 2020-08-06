from django.shortcuts import render

# Create your views here.

def profile_detail_view(request, username, *args, **kwargs):
    print(username)
    return render(request, "profiles/detail.html", context= {'username':username})
