import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './client/navbar/navbar.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { HousesComponent } from './client/houses/houses.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'houses', component: HousesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
