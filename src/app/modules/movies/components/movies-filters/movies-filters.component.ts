import {Component, EventEmitter, Output} from '@angular/core';
import {SearchOptions} from "../../../../common/components/search/search.typings";
import {MovieFilter} from "./movie-filter.typings";
import {RATING_FILTER_THRESHOLD} from "./filters.consts";

@Component({
  selector: 'app-movies-filters',
  templateUrl: './movies-filters.component.html',
  styleUrls: ['./movies-filters.component.scss']
})
export class MoviesFiltersComponent {

  @Output() filter = new EventEmitter<MovieFilter>();

  searchOptions: SearchOptions = {
    placeholder: 'Search a movie'
  };

  filterRating = false;
  filterRatingThreshold = RATING_FILTER_THRESHOLD;
  searchTerm = '';

  toggleRating() {
    this.filterRating = !this.filterRating;
    this.changeFilter();
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.changeFilter();
  }

  changeFilter() {
    this.filter.emit({
      ratingToggle: this.filterRating,
      searchTerm: this.searchTerm
    })
  }
}
