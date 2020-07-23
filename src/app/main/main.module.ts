import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { MainRoutingModule } from './main-routing.module';
import { AnalisesComponent } from './analises/analises.component';
import { SobreComponent } from './sobre/sobre.component';
import { MidiaComponent } from './midia/midia.component';
import { PodcastsComponent } from './podcasts/podcasts.component';

@NgModule({
  declarations: [
    HomeComponent,
    AnalisesComponent,
    SobreComponent,
    MidiaComponent,
    PodcastsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
