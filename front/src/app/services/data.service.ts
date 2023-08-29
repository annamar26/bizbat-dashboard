import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  port = 5000; //6001;
  baseUrl = 'http://localhost'
  path =''
  optionSubject = new BehaviorSubject<string>('/users/top_followers/');
  constructor(private http: HttpClient ) { }

  getDummy(path: string): Observable<any>{
   return this.http.get(`${this.baseUrl}:${this.port}${path}`)
  }

  getData(){
    return[
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
  }
}
