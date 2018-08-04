import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { DentalServicesComponent } from './pages/dental-services/dental-services.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchpipePipe,
    DentalServicesComponent,
    HomeComponent,
    RegisterComponent,
    AddAppointmentComponent,
    LoginComponent
  ],
  imports: [
    AlertModule.forRoot(), BrowserModule, RoutingModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
