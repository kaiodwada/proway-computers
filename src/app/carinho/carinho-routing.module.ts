import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarinhoComponent } from './carinho.component';

const routes: Routes = [{ path: '', component: CarinhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarinhoRoutingModule { }
