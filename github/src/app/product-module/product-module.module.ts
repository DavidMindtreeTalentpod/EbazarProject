import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListDisplayComponent } from './product-list-display/product-list-display.component';
import { MaterialModule } from '../material.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatButtonToggleModule,
    MatIconModule,
    MatGridListModule
  ],
  declarations: [ProductListDisplayComponent]
})
export class ProductModuleModule { }
