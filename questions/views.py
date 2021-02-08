from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Question
import random



def index(request):
	#	Question.objects.filter(tags__name='exampletag').order_by('answers__value')
	i = random.randint(0,3)

	question1 = Question.objects.get(id=i)
	question2 = Question.objects.get(id=((i+1)%3))
	question3 = Question.objects.get(id=((i+2)%3))
	return render(request, 'base.html', {'question1': question1, 'question2': question2, 'question3': question3})
