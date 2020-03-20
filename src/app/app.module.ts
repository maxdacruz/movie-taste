import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MovieDashboardComponent } from "./components/movie-dashboard/movie-dashboard.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieDashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
