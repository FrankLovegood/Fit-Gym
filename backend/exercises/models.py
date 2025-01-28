from django.db import models

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Muscle(models.Model):
    name = models.CharField(max_length=100)