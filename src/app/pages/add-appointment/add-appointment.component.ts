import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  
  public addRoomForm = new FormGroup({
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

  public onAddRoom() {
    const body = new URLSearchParams();

    body.set('name', this.addRoomForm.value.name);
    body.set('email', this.addRoomForm.value.email);
    body.set('phone', this.addRoomForm.value.phone);
    body.set('address', this.addRoomForm.value.address);
    body.set('preferedDate', this.addRoomForm.value.preferedDate);
    body.set('purpose', this.addRoomForm.value.purpose);
    body.set('emergency', this.addRoomForm.value.emergency);
    body.set('preferedContactMethod', this.addRoomForm.value.preferedContactMethod);

    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // this._http.post
   this._http.post('http://localhost/it255/addAppointment.php', body.toString(), {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });
  }

}
