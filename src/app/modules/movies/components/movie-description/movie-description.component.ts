import {Component, Input} from '@angular/core';
import {SimpleModalComponent} from "ngx-simple-modal";
import {Movie} from "../../services/movies/movie.interface";
import {ActionButton} from "../movie-card/movie-card.typings";

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent extends SimpleModalComponent<{movie: Movie}, void>{

  @Input() movie: Movie;
  backToListAction: ActionButton = {
    icon: 'arrow-left',
    text: 'Back to list',
    onClick: () => this.close()
  };

  constructor() {
    super();
  }
}
