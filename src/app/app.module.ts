import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './store/example.reducer';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';
import {FormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {ExampleEffects} from "./store/example.effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({example: fromReducer.reducer}, {}),
    EffectsModule.forRoot([ExampleEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
