import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public isAuth: boolean;
  router: Router;

  public constructor(router: Router){
    this.router = router;
  }

  public ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  public logOut() {
    localStorage.removeItem('token');
    this.isAuth = false;
    this.router.navigate(['./home']);
    location.reload();
  }
}
