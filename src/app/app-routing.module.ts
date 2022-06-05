import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityGridComponent } from './city-grid/city-grid.component';

const routes: Routes = [
  { path: 'cities', component: CityGridComponent },
  { path: '', redirectTo: 'cities', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
