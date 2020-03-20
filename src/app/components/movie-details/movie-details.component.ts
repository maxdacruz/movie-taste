import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/model/movie';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  myMovieDetails: Movie;
  myurl;
  myGenres;
  
  constructor(private route:ActivatedRoute, private ms: MovieService,) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      const capturedkey = params.get('imdbID');
      this.myMovieDetails = this.ms.getOneMovie(capturedkey)
      this.myurl = this.myMovieDetails.Images[0]
    })
    this.myGenres = this.myMovieDetails.Genre.split(",");
  }

}
