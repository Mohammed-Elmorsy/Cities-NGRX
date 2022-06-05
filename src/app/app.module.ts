import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityGridComponent } from './city-grid/city-grid.component';
import { CityCardComponent } from './city-grid/city-card/city-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { cityReducer } from './store/reducers/city.reducer';



@NgModule({
  declarations: [
    AppComponent,
    CityGridComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cities: cityReducer }, {}),
    BrowserAnimationsModule,

    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
