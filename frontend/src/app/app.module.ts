import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { HousesComponent } from './client/houses/houses.component';
import { RegisterComponent } from './client/register/register.component';
import { LoginComponent } from './client/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddhouseComponent } from './admin/addhouse/addhouse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HousesComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddhouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
