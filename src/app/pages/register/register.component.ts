import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  });
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public onRegister() {
    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // this._http.post
   this._http.post('http://localhost/it255/registerservice.php', this.registerForm.value, {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });
  }
}
