import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Color } from './color';

@Injectable({
  providedIn: 'root'
})
export class PhpSqlApiService {
public url=environment.api_url;
  constructor(private http: HttpClient) { 
  }
//function 1
getallcolor(): Observable<Color[]>{
  return this.http.get<Color []>(this.url+'color').pipe(map(data=>{return data;})
  );
  }

    
}
