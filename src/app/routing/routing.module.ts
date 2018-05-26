import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DentalServicesComponent } from '../pages/dental-services/dental-services.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AddAppointmentComponent } from '../pages/add-appointment/add-appointment.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
      path: 'services',
      component: DentalServicesComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'add-appointment',
      component: AddAppointmentComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class RoutingModule { }
