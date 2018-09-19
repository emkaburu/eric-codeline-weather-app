import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDetailsComponent }    from './weather-details.component';

const weatherRoutes: Routes = [
  { 
  	path: 'weather/:woeid',  
  	component: WeatherDetailsComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(weatherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WeatherRoutingModule { }