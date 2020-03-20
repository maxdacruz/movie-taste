import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: MovieDashboardComponent
  },
  {
    path: "movie-details/:imdbID",
    component: MovieDetailsComponent
  },
  {
    path: "movie-list",
    component: MovieListComponent
  },

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
