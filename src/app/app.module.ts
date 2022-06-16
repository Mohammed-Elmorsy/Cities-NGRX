import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  createStore,
  actionSanitizer,
  stateSanitizer,
  AdaptCommon,
} from '@state-adapt/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityGridComponent } from './city-grid/city-grid.component';
import { CityCardComponent } from './city-grid/city-card/city-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

const enableReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.({
  actionSanitizer,
  stateSanitizer,
});

@NgModule({
  declarations: [AppComponent, CityGridComponent, CityCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatCardModule,
    MatButtonModule,
    MatSliderModule,
  ],
  providers: [
    { provide: AdaptCommon, useValue: createStore(enableReduxDevTools) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
