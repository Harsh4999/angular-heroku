import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {alien} from './alien'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppservService {

  constructor( private http: HttpClient) { }
  public getAll():Observable<alien[]>{
    return this.http.get<alien[]>('https://postresapp.herokuapp.com/');
  }
}
