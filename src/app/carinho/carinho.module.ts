import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarinhoRoutingModule } from './carinho-routing.module';
import { CarinhoComponent } from './carinho.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarinhoComponent
  ],
  imports: [
    CommonModule,
    CarinhoRoutingModule,
    FormsModule
  ]
})
export class CarinhoModule { }
