import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.sass"]
})
export class MovieListComponent implements OnInit {
  myMovies = []

  

  constructor(private ms: MovieService) {}


  ngOnInit(): void {
    this.myMovies = this.ms.getAllMovies();
  }

}
