import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit 

{
  email;      
  profileForm = new FormGroup({
     Name: new FormControl(''),
     email: new FormControl('', [Validators.required,Validators.minLength(8)]),
    password: new FormControl(''),
      conformPassword: new FormControl(''),
      adress:new FormControl(''),
      city: new FormControl('')
     
    })


    getErrorMessage() {
      // console.log(this.profileForm)
      return this.profileForm.get("email").hasError('required') ? 'You must enter a value' :'';
    }


  
  constructor() {
  }


  ngOnInit() 
  {
    
  }
}
