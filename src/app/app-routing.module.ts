import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SearchResultsComponent } from './shared';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', pathMatch: 'full'
    },
   /* { 
    	path: 'search/:city', 
        component: SearchResultsComponent
    },*/
    { 
    	path: '**', 
    	redirectTo: 'not-found' 
    }
];

@NgModule({
    imports: [
    	RouterModule.forRoot(routes),
    ],
    exports: [
    	RouterModule
    ]
})
export class AppRoutingModule {}