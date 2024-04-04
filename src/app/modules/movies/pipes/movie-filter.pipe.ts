import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../services/movies/movie.interface";
import {MovieFilter} from "../components/movies-filters/movie-filter.typings";
import {RATING_FILTER_THRESHOLD} from "../components/movies-filters/filters.consts";

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], filters: MovieFilter): Movie[] {
    return movies
      .filter( (movie) => movie.title.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      .filter( movie => filters.ratingToggle ? Number(movie.rating) > RATING_FILTER_THRESHOLD : true);
  }

}
