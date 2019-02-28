import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://guarded-spire-16362.herokuapp.com/get_region/winterfell');
  }

  getDorne(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://guarded-spire-16362.herokuapp.com/get_region/dorne');
  }

  getEssos(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://guarded-spire-16362.herokuapp.com/get_region/essos');
  }

  getBraavos(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://guarded-spire-16362.herokuapp.com/get_region/braavos');
  }
}
