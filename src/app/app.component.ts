import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-new';
  citiesMap = new Map<string, City>();
  cities: City[] = [];

  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.citiesMap = data;
      const citiesMap = this.citiesMap;
      this.cities = Array.from(Object.keys(citiesMap).map(key => citiesMap[key]));
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/cities.json');
  }

}

class City {
  name: string;
  top: number;
  left: number;
  color: string;
  connectedCities: string[];

  constructor(name: string, top: number, left: number, connectedCities: string[]) {
    this.name = name;
    this.top = top;
    this.left = left;
    this.connectedCities = connectedCities;
  }
}
