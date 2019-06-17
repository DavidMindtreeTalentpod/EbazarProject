import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from '../material.module';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    
  ]
})
export class AuthenticationModule { 




  
}
