import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchOptions} from "./search.typings";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  private static readonly DEFAULT_SEARCH_OPTIONS: SearchOptions = {
    placeholder: 'Search'
  }

  @Input() set options(options: SearchOptions) {
    this._options = Object.assign({}, SearchComponent.DEFAULT_SEARCH_OPTIONS, options);
  }

  @Output() search = new EventEmitter();

   _options: SearchOptions = SearchComponent.DEFAULT_SEARCH_OPTIONS;

  onSearch(event: Event) {
    this.search.emit((event.target as HTMLInputElement).value)
  }
}
