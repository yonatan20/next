import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './movies.component';
import {MoviesService} from "./services/movies/movies.service";
import {HttpClientModule} from "@angular/common/http";
import {SearchModule} from "../../common/components/search/search.module";
import {RouterModule, Routes} from "@angular/router";
import {SimpleModalModule} from "ngx-simple-modal";
import {MovieDescriptionComponent} from './components/movie-description/movie-description.component';
import {LoaderModule} from "../../common/components/loader/loader.module";
import {TimeFormatModule} from "../../common/pipes/time-format/time-format.module";
import {ToggleModule} from "../../common/components/toggle/toggle.module";
import {MoviesFiltersComponent} from "./components/movies-filters/movies-filters.component";
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MovieFilterPipe} from './pipes/movie-filter.pipe';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

export const MOVIE_ID = 'id';

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    children: [
      {path: `:${MOVIE_ID}`, component: MoviesComponent}
    ]
  }
]

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDescriptionComponent,
    MoviesFiltersComponent,
    MovieCardComponent,
    MovieFilterPipe
  ],
  providers: [
    MoviesService,
  ],
  exports: [
    MoviesComponent
  ],
  imports: [
    SimpleModalModule,
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    SearchModule,
    LoaderModule,
    TimeFormatModule,
    ToggleModule
  ]
})
export class MoviesModule {
}
