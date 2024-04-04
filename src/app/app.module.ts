import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesModule} from "./modules/movies/movies.module";
import {FooterComponent} from './footer/footer.component';

export const BASE_URL_TOKEN = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => ''
});

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
  ],
  providers: [
    {provide: BASE_URL_TOKEN, useValue: 'http://localhost:3000'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
