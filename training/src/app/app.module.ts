import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { TrucksComponent } from './trucks/trucks.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MotorcyclesComponent,
    TrucksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
