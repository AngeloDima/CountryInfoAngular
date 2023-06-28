import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InfoPaesiService {

  constructor(private http: HttpClient) { }

  url: string = "https://restcountries.com/v3.1/name/italy"

  getInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.url)

  }

}



