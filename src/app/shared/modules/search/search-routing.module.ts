import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultsComponent }    from './search-results.component';

const searchRoutes: Routes = [
  { 
  	path: 'search/:city',  
  	component: SearchResultsComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }