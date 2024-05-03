import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { bookings } from '../app/core/core.index';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = 'http://localhost:3000/v1/booking';
  getAllBookingsUrl = this.url + '/get-all-bookings';
  registerNewBookingUrl = this.url + '/register-new-booking';
  // updateExistingEventUrl = this.url + '/update-existing-event';

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any>{
    return this.http.get(this.getAllBookingsUrl)
    .pipe(
      map((response:any) => {
        // Handle successful login response here
        // Store authentication token, user data, etc.
        return response;
      }),
      catchError(this.handleError)
    );
  }

  registerNewBooking(booking:any): Observable<any>{
    return this.http.put(this.getAllBookingsUrl, booking)
    .pipe(
      map((response:any) => {
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
