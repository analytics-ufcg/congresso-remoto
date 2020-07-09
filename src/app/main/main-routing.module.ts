import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnalisesComponent } from './analises/analises.component';
import { SobreComponent } from './sobre/sobre.component';
import { MidiaComponent } from './midia/midia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'analises',
    component: AnalisesComponent
  },
  {
    path: 'midia',
    component: MidiaComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
