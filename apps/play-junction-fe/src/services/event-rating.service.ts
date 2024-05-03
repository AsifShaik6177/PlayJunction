import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventRating } from '../app/core/models/models';

@Injectable({
  providedIn: 'root'
})
export class EventRatingService {
  private url = 'http://localhost:3000/v1/event-rating';
  getAllEventsUrl = this.url + '/get-all-event-ratings';
  registerNewEventUrl = this.url + '/register-new-event-rating';
  // updateExistingEventUrl = this.url + '/update-existing-event';

  constructor(private http: HttpClient) { }

  getAllEventReviews(): Observable<EventRating[]>{
    return this.http.get(this.getAllEventsUrl)
    .pipe(
      map((response:any) => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }


  addNewReview(data:any): Observable<any>{
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

