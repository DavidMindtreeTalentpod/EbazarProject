import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonToggleModule,

} from '@angular/material';

@NgModule({
 
  imports: 
  
  [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule
    
  ],
  
  exports: 
  
  [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
 
  ]
})
export class MaterialModule {}