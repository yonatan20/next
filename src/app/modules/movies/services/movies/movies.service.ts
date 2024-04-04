import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, EMPTY, finalize, Observable, tap} from "rxjs";
import {Movie} from "./movie.interface";
import {HttpClient} from "@angular/common/http";
import {BASE_URL_TOKEN} from "../../../../app.module";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly apiUrl: string;

  private _loading$ = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$.asObservable();

  private _movies$ = new BehaviorSubject<Movie[]>([]);
  movies$ = this._movies$.asObservable();

  constructor(private http: HttpClient, @Inject(BASE_URL_TOKEN) baseUrl: string) {
    this.apiUrl = `${baseUrl}/movies`;
  }

  getAllMovies(): Observable<Movie[]> {
    this._loading$.next(true);
    return this.http.get<Movie[]>(this.apiUrl)
      .pipe(
        catchError(() => {
          this.handleError();
          return EMPTY;
        }),
        tap((data: Movie[]) => this._movies$.next(data)),
        finalize(() => this._loading$.next(false))
      )
  }

  private handleError() {
    //raise a toast or something
    return;
  }
}
