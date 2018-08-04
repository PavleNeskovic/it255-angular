import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dental-services',
  templateUrl: './dental-services.component.html',
  styleUrls: ['./dental-services.component.css']
})
export class DentalServicesComponent implements OnInit {

  public posts: any[];
  public title: String = '';
  public message: String = '';
  public fullImagePath: String = 'assets/images/';
  constructor(private _http: Http) {
    this._http.get('http://localhost/it255/getServices.php').subscribe((data) => {
      this.posts = JSON.parse(data['_body']);
    });
  }

  ngOnInit() {
  }

}
