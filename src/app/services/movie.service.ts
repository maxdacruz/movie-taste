import { Injectable } from "@angular/core";
import moviesArray from "../services/movies-data.json";
import{Movie} from "../model/movie";


@Injectable({
  providedIn: "root"
})

export class MovieService {
   myMovies = moviesArray
  constructor(){}

  getAllMovies(): Movie[] {
    return this.myMovies
  }
  getOneMovie(imdbID: string): Movie{
    return this.myMovies.filter(movie => movie.imdbID === imdbID)[0];
  }
}