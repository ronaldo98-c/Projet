import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from "@angular/router";
import { MeteoActuelleComponent } from './meteo-actuelle/meteo-actuelle.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path:'meteo-actuelle',component:MeteoActuelleComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MeteoActuelleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
