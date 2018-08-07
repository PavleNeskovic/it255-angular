import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() { }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  http: Http;
  router: Router;
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['./home']);
    }
  }
  onLogin(): void {
    const body = new URLSearchParams();
    let headers = new Headers();

    body.set('username', this.loginForm.value.username);
    body.set('password', this.loginForm.value.password);

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.post('http://localhost/it255/loginservice.php', body.toString(), { headers: headers })
      .map(res => res).subscribe(
        data => {
          let obj = JSON.parse(data["_body"]);
          localStorage.setItem('token', obj.token);
          this.router.navigate(['./home']);
          location.reload();
        },
        err => {
          let obj = JSON.parse(err._body);
          let element = <HTMLElement>document.getElementsByClassName("alert")[0];
          element.style.display = "block";
          element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
        }
      );
  }
}