from django.shortcuts import render, redirect, render_to_response
from .forms import RegistersForm, VoteForm, AuthenticationForm, RegistrationForm
from django.http import HttpResponseRedirect
from .models import Vote, Players
from django.contrib.auth import login as django_login, authenticate, logout as django_logout
from django.template import RequestContext
from sites.scripts.parse import list_of_lists, shonanDict
from django.db.models import Count
import json
import datetime
import time

# Create your views here.

def user_new(request):
    if request.method == "POST":
        form = RegistersForm(request.POST)
        if form.is_valid():
            post = form.save()
            post.save()
            return HttpResponseRedirect('/')
    else:
        form = RegistersForm()
    return render(request, 'sites/login.html', {'form': form})
    
   
def vote(request):
    shonan = list_of_lists[0]
    shonan2 = json.dumps(list_of_lists)
    form0 = VoteForm(request.POST or None, prefix='form-0')
    form1 = VoteForm(request.POST or None, prefix='form-1')
    form2 = VoteForm(request.POST or None, prefix='form-2')
    form3 = VoteForm(request.POST or None, prefix='form-3')
    form4 = VoteForm(request.POST or None, prefix='form-4')
    form5 = VoteForm(request.POST or None, prefix='form-5')
    form6 = VoteForm(request.POST or None, prefix='form-6')
    form7 = VoteForm(request.POST or None, prefix='form-7')
    form8 = VoteForm(request.POST or None, prefix='form-8')
    form9 = VoteForm(request.POST or None, prefix='form-9')
    form10 = VoteForm(request.POST or None, prefix='form-10')
    
    if request.method == "POST":

        form = VoteForm(request.POST)
        if form1.is_valid():

            save0 = form0.save(commit=True)
            save0.save()
            
            save1 = form1.save(commit=True)
            save1.save()
            
            save2 = form2.save(commit=True)
            save2.save()
            
            save3 = form3.save(commit=True)
            save3.save()

            save4 = form4.save(commit=True)
            save4.save()
            
            save5 = form5.save(commit=True)
            save5.save()
            
            save6 = form6.save(commit=True)
            save6.save()
            
            save7 = form7.save(commit=True)
            save7.save()
            
            save8 = form8.save(commit=True)
            save8.save()
            
            save9 = form9.save(commit=True)
            save9.save()
            
            save10 = form10.save(commit=True)
            save10.save()
            return HttpResponseRedirect('/')


    form = VoteForm() #deletar quando tirar o comment a cima
    return render(request, 'sites/vote.html', {'form0': form0,'form1': form1, 'form2': form2,'form3': form3,'form4': form4,'form5': form5,'form6': form6,'form7': form7,'form8': form8,'form9': form9,'form10': form10, 'shonan': shonan,'shonan2': shonan2})
    
    
def player_list(request):
    now = datetime.datetime.now()
    if now.isoweekday() == 5 and str(now.hour) == "23" and str(now.minute) == "59":
       Players.objects.all().delete()
    players = Players.objects.values('name', 'team', 'position').annotate(name_count=Count('id')).exclude(position="GK").order_by('-name_count')[:10]
    gk = Players.objects.values('name', 'team', 'position').annotate(name_count=Count('id')).exclude(position="DF").exclude(position="FW").exclude(position="MF").order_by('-name_count')[:1]
    return render(request, 'sites/list.html', {'players': players, 'gk':gk})

def login(request):

    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = authenticate(email=request.POST['email'], password=request.POST['password'])
            if user is not None:
                if user.is_active:
                    django_login(request, user)
                    return redirect('/')
    else:
        form = AuthenticationForm()
    return render_to_response('registration/login.html', {
        'form': form,
    }, context_instance=RequestContext(request))
    
 
    
    
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(data=request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('/')
    else:
        form = RegistrationForm()
    return render_to_response('sites/register.html', {
        'form': form,
    }, context_instance=RequestContext(request))
    
    
  
def logout(request):
    """
    Log out view
    """
    django_logout(request)
    return redirect('/')
    

