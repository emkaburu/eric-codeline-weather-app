import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomepageModule } from './homepage/homepage.module';
import { AppComponent } from './app.component';
import { SearchModule } from './shared';

import { AppRoutingModule } from './app-routing.module'; //Should come last

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule, FormsModule,
        HomepageModule,
        SearchModule,
        AppRoutingModule
    ],

    declarations: [
        AppComponent,
    ],

    providers: [
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
