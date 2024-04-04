import {Component, HostBinding, Input} from '@angular/core';
import {Movie} from "../../services/movies/movie.interface";
import {ActionButton} from "./movie-card.typings";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() actionButton: ActionButton;

  @Input() movie: Movie;

  @HostBinding('class.descriptive')
  @Input() descriptive: boolean;

}
