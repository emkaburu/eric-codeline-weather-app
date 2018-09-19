import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { SearchResultsComponent } from './search-results.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherModule } from '../../../shared/modules/weather/weather.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeatherModule,
    SearchRoutingModule
  ],
  declarations: [SearchBarComponent, SearchResultsComponent],
  exports: [SearchBarComponent, SearchResultsComponent]
})
export class SearchModule { }
