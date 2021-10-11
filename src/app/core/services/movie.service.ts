import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieCard } from 'src/app/shared/models/movieCard';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/models/movie';

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
  getMoviesByGenre(genreId: number, searchParams?: Map<any, any>): Observable<PagedResult<MovieCard>> {
    let params = new HttpParams();
    if (searchParams) {
      searchParams.forEach((value: string, key: string) => {
        params = params.append(key, value);
      });
    }
    return this.http.get<PagedResult<MovieCard>>(`${environment.apiUrl}movies/genre/${genreId}`, { params: params });
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get(`${environment.apiUrl}movies/${id}`).pipe(map(resp => resp as Movie));

  }

}