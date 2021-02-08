from django.db import models
from uuid import uuid4



class Question(models.Model):
	id		= models.IntegerField(primary_key=True, editable=True)
	title	= models.CharField(max_length=120)

# Create your models here.
class Answer(models.Model):
	answer 	= models.CharField(max_length=256, null=True)
	value	= models.IntegerField(null=True)
	question= models.ForeignKey(Question, null=True, on_delete=models.SET_NULL)


	def __str__(self):
		return f'{self.answer}'