import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCard } from 'src/app/shared/models/movieCard';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // int x;
  constructor(private http: HttpClient) { }

  getTopGrossingMovies(): Observable<MovieCard[]> {

    // Always Angular services return Observables 
    return this.http.get<MovieCard[]>(`${environment.apiUrl}movies/toprevenue`);

    //  return this.http.get('https://localhost:44316/api/Movies/toprevenue').pipe(map(resp => resp as Moviecard[]));
    
  }

}