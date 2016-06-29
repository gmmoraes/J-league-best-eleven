from django import forms

from .models import Registers, Vote, User, Players
from django.core.exceptions import ValidationError

class RegistersForm(forms.ModelForm):

    class Meta:
        model = Registers
        fields = ('username', 'password',)
        
        
class VoteForm(forms.ModelForm):
    
    class Meta:
        model = Players
        fields = ('name', 'team','position',)
        
        widgets = {
            'name': forms.HiddenInput(
                attrs={'display': 'nothing', 'required': True, 'placeholder': 'Say something...'},
            ),
            'team': forms.HiddenInput(
                attrs={'display': 'nothing', 'required': True, 'placeholder': 'Say something...'}
            ),
            'position': forms.HiddenInput(
                attrs={'display': 'nothing', 'required': True, 'placeholder': 'Say something...'}
            ),
        }
'''
    def clean(self):
        dfCounter = []
        a= 0
        positions = self.cleaned_data.get('id_form-0-position')
        #positions0 = self.cleaned_data.get('id_form-0-position')
        print(positions)
        if positions == "DF":
            dfCounter.append(1)
            a = a +1
        
        if sum(int(i) for i in dfCounter) < 3:
            print(sum(int(i) for i in dfCounter))
            raise ValidationError("You need at least 3 defenders")
        
'''   
        
        
class RegistrationForm(forms.ModelForm):

    email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder': 'email'}),label="")
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'password'}),
                                label="")
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password (again)'}),
                                label="")

    class Meta:
        model = User
        fields = ['email', 'password1', 'password2']

        
    def clean(self):
        """
        Verifies that the values entered into the password fields match

        NOTE: Errors here will appear in ``non_field_errors()`` because it applies to more than one field.
        """
        cleaned_data = super(RegistrationForm, self).clean()
        if 'password1' in self.cleaned_data and 'password2' in self.cleaned_data:
            if self.cleaned_data['password1'] != self.cleaned_data['password2']:
                raise forms.ValidationError("Passwords don't match. Please enter both fields again.")
        return self.cleaned_data

    def save(self, commit=True):
        user = super(RegistrationForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user
        
        
class AuthenticationForm(forms.Form):
    """
    Login form
    """
    email = forms.EmailField(widget=forms.widgets.TextInput(attrs={'placeholder': 'Email', 'class':'form-control', 'id':'emailLoginInput'}),
                                label="")
    password = forms.CharField(widget=forms.widgets.PasswordInput(attrs={'placeholder': 'Password', 'class':'form-control', 'id':'passwordLoginInput'}),
                                label="")

    class Meta:
        fields = ['email', 'password']
        
        
'''      
class PostForm(forms.ModelForm):
    class Meta:
        model = Players
        fields = ['name', 'team', 'position']
        widgets = {
            'name': forms.TextInput(
                attrs={'id': 'name-player', 'required': True, 'placeholder': 'Say something...'}
            ),
            'team': forms.TextInput(
                attrs={'id': 'team-player', 'required': True, 'placeholder': 'Say something...'}
            ),
            'position': forms.TextInput(
                attrs={'id': 'position-player', 'required': True, 'placeholder': 'Say something...'}
            ),
        }
        
'''