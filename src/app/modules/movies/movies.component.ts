import {Component} from '@angular/core';
import {MoviesService} from "./services/movies/movies.service";
import {tap} from "rxjs";
import {Movie} from "./services/movies/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {SimpleModalService} from "ngx-simple-modal";
import {MovieDescriptionComponent} from "./components/movie-description/movie-description.component";
import {MovieFilter} from "./components/movies-filters/movie-filter.typings";
import {MOVIE_ID} from "./movies.module";
import {ActionButton} from "./components/movie-card/movie-card.typings";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  loading$ = this.moviesService.loading$;

  movies$ = this.moviesService.movies$;

  filters = {
    searchTerm: '',
    ratingToggle: false
  }

  readMoreButton: ActionButton = {
    text: 'Read More',
    onClick: this.readMore.bind(this),
    icon: 'arrow-right'
  };

  constructor(public moviesService: MoviesService,
              private simpleModalService: SimpleModalService,
              private route: Router,
              private activeRoute: ActivatedRoute) {
    this.moviesService
      .getAllMovies()
      .pipe(
        tap((movies: Movie[]) => {
          const id = this.activeRoute.snapshot.firstChild?.paramMap.get(MOVIE_ID);

          if (!id) {
            return;
          }

          const movie = movies.find((movie) => movie.id === id);
          movie && this.openMovieDescription(movie)
        })
      )
      .subscribe();
  }

  readMore(movie: Movie) {
    this.route.navigate([`./${movie.id}`], {relativeTo: this.activeRoute})
      .then(() => this.openMovieDescription(movie));
  }

  openMovieDescription(movie: Movie) {
    //This library has a bug, it removes my custom class during fade out, so the popup is jumpy
    this.simpleModalService
      .addModal(MovieDescriptionComponent, {movie}, {
        closeOnClickOutside: true,
        wrapperClass: 'movie-description-modal in'
      })
      .subscribe(() => {
        this.route.navigate(['./'], {relativeTo: this.activeRoute})
      });
  }

  applyFilter(filters: MovieFilter) {
    this.filters = filters;
  }
}
