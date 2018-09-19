import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherRoutingModule } from './weather-routing-module';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  declarations: [WeatherComponent, WeatherDetailsComponent],
  exports: [WeatherComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
