import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  selector: 'RegisterComponent',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  http: Http;
  router: Router;
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['./']);
    }
  }
  onRegister(): void {
    const body = new URLSearchParams();
    let headers = new Headers();

    body.set('username', this.registerForm.value.username);
    body.set('password', this.registerForm.value.password);
    body.set('firstName', this.registerForm.value.firstName);
    body.set('lastName', this.registerForm.value.lastName);

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255/registerservice.php', body.toString(), { headers: headers })
      .map(res => res).subscribe(
        data => {
          let obj = JSON.parse(data["_body"]);
          // localStorage.setItem('token', obj.token);
          this.router.navigate(['./login']);
        },
        err => {
          console.log("registration error")
          let obj = JSON.parse(err._body);
          let element = <HTMLElement>document.getElementsByClassName("alert")[0];
          element.style.display = "block";
          element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
        }
      );
  }
}