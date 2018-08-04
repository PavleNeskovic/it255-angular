import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {


  public addAppointmentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    preferedDate: new FormControl(),
    purpose: new FormControl(),
    emergency: new FormControl(),
    preferedContactMethod: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public onAddAppointment() {
    const body = new URLSearchParams();
    const headers = new Headers();

    body.set('name', this.addAppointmentForm.value.name);
    body.set('email', this.addAppointmentForm.value.email);
    body.set('phone', this.addAppointmentForm.value.phone);
    body.set('address', this.addAppointmentForm.value.address);
    body.set('preferedDate', this.addAppointmentForm.value.preferedDate);
    body.set('purpose', this.addAppointmentForm.value.purpose);
    body.set('emergency', this.addAppointmentForm.value.emergency);
    body.set('preferedContactMethod', this.addAppointmentForm.value.preferedContactMethod);

    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    this._http.post('http://localhost/it255/addAppointment.php', body.toString(), {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });
  }

}
