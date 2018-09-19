import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { WeatherModule } from '../shared';
import { SearchModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    WeatherModule,
    SearchModule,
    HomepageRoutingModule,
  ],
  declarations: [
  	HomepageComponent,
  ]
})
export class HomepageModule { }
