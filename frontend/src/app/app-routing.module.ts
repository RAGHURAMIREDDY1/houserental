import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './client/navbar/navbar.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { HousesComponent } from './client/houses/houses.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginComponent } from './client/login/login.component';
import { AddhouseComponent } from './admin/addhouse/addhouse.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: CarouselComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproperty', component: AddhouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
