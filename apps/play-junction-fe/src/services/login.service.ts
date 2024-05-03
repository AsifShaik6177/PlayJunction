import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserProfile } from '../app/core/models/models';

// Interface for user credentials (optional for type safety)
export interface Credentials {
  email: string | null;
  password: string | null;
}

export interface RegistrationData {
  email: string|null;
  password: string|null;
  name: string|null;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/v1/user'
  private loginUrl =  this.url + '/login'; 
  private registerUrl = this.url+ '/register-new-user';
  private updateUrl = this.url+ '/update-existing-user';
  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials)
      .pipe(
        map(response => {
          // Handle successful login response here
          // Store authentication token, user data, etc.
          return response;
        }),
        catchError(this.handleError)
      );
  }

  registerNewUser(registrationData: RegistrationData): Observable<any> {
    return this.http.put<any>(this.registerUrl, registrationData)
      .pipe(
        map(response => {
          // Handle successful registration response here
          // Redirect to login, display a success message, etc.
          return response;
        }),
        catchError(this.handleError)
      );
  }

  updateExistingUser(userData: UserProfile): Observable<any> {
    return this.http.post<any>(this.updateUrl, userData)
      .pipe(
        map(response => {
          // Handle successful registration response here
          // Redirect to login, display a success message, etc.
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