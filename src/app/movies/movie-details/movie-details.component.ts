import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: number = 0;
  movie!: Movie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from the URL
    // read the id from URL and go to MovieService , create getMovieDetails method => Observable<Movie>
    this.route.paramMap.subscribe(p => {
      this.id = Number(p.get('id'));
      console.log('Movie Id from the URL: ' + this.id);
      // call the Movie Service to get the movie details info
    })

  }

}
