import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SportEvent } from '../app/core/core.index';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url = 'http://localhost:3000/v1/events';
  getAllEventsUrl = this.url + '/get-all-events';
  getEventUrl = this.url + '/get-event';
  registerNewEventUrl = this.url + '/register-new-event';
  updateExistingEventUrl = this.url + '/update-existing-event';
  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<SportEvent[]>{
    return this.http.get<any>(this.getAllEventsUrl)
    .pipe(
      map(response => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getEventById(eventId: string): Observable<SportEvent>{
    return this.http.post<any>(this.getEventUrl,{eventId: eventId})
    .pipe(
      map(response => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }

  registerNewEvent(data:SportEvent): Observable<any>{
    return this.http.put<any>(this.registerNewEventUrl, data)
    .pipe(
      map(response => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }

  updateExisting(data:SportEvent): Observable<any>{
    return this.http.post<any>(this.updateExistingEventUrl, data)
    .pipe(
      map(response => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
