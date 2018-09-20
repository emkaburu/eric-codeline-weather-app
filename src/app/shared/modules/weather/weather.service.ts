import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

/*const httpOptions = {
  	headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
*/

@Injectable()
export class WeatherService {
	private baseUrl = "http://escort.brainchainltd.com/";
	// private locationUrl = "https://www.metaweather.com/api/location/search/?query=";
	// private weatherUrl = "https://www.metaweather.com/api/location/";
	constructor(private http: HttpClient) { }
// 

	getWoeid(command, city) : Observable<any> {
      return this.http.get(this.baseUrl+"?command="+command+"&keyword="+city)
        .pipe(
          catchError(this.handleError('getWoeid', []))
        );     

       /* return this.http.get(this.locationUrl+city)
        .pipe(
          catchError(this.handleError('getWoeid', []))
        );  */ 
     
    }

    getCityWeather(command, woeid) : Observable<any> {
      return this.http.get(this.baseUrl+"?command="+command+"&woeid="+woeid)
        .pipe(
          catchError(this.handleError('getCityWeather', []))
        );      

        /*return this.http.get(this.weatherUrl+woeid)
        .pipe(
          catchError(this.handleError('getWoeid', []))
        ); */  
     
    }

     /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

      private log(message: string) {
      console.log("ERROR LOG: ", message);
    }

   
}
