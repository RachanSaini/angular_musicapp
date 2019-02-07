import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Track } from './track';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/Observable/map';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // private query: string;
  tracks: Array<Track>;
  id: number;
  trackObj: Track;
  trackSubject: Observable<any>;
   private API_KEY: string;
   private API_URL: string;
   private springEndPoint: string;
   private errormsg: string;
   private errorstatus: string;
   private errorbody: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India';
     this.API_KEY = '&api_key=37dd8dab3b7a3bc79f32cb60be5d2976&format=json&limit=10';
     this.springEndPoint = 'http://localhost:8090/api/v1';
  }
  public getTrackDetails(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.API_URL}${this.API_KEY}`);
     }

  getTracks() {
   return this.http.get(`${this.API_URL}${this.API_KEY}`);
  }
  addTrackTOWishlist(track: Track) {
    console.log(track);
    return this.http.post(this.springEndPoint + '/track', track , { observe: 'response'})
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured :', error.error.message);
    } else {
      this.errorstatus = `${error.status}`;
      console.log('Error msg', this.errorstatus);
      this.errorbody = `${error.error}`;
      console.log(
        `Backened returned code ${error.status},` + `body was :${error.error}`
      );
    }
    return throwError(this.errorstatus);
  }

  getAddedTracks() {
    return this.http.get(this.springEndPoint + '/track');
  }
}
