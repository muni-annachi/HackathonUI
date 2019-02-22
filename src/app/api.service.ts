import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Persona } from './persona';
const API_URL = environment.apiURL;
const headers = new HttpHeaders().set('Content-Type', 'application/json');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
'Accept': 'text/html'}
)
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPersona() {
    
    var request = {
      "REQUEST":
      {
        "POSTS": ["dkjjkk are you, have we ever met"]
      }
    };
   
    console.log('sohel');
    console.log(this.http.post(API_URL + '/postbus', JSON.stringify(request), 
    { headers, responseType: 'text' as 'json' }
 ));
    return this.http.post(API_URL + '/postbus', JSON.stringify(request), httpOptions);
  }

  // Add new Hero
  postPersona(persona: Persona) : Observable<any> {
    const headers1 = new Headers({
      'Content-Type': 'application/json, text/html'
    });
    var request = {
      "REQUEST":
      {
        "POSTS": [persona.message]
      }
    };
    return  this.http.post(API_URL + '/postbus', JSON.stringify(request),   { headers, responseType: 'text' as 'json' }
    ).pipe(map(data => data), catchError(this.handleError));;
    
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
} 