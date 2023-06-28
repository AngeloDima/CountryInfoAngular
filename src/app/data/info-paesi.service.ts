import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HomeInfo } from '../datiShape/home-info';

@Injectable({
  providedIn: 'root'
})
export class InfoPaesiService {
  constructor(private http: HttpClient) { }

  url: string = "https://restcountries.com/v3.1/name/";

  getInfo(paese: string): Observable<HomeInfo> {
    const apiUrl = `${this.url}${paese}`;
    return this.http.get<any>(apiUrl).pipe(
      map((response: any) => {
        const item = response[0];
        const info: HomeInfo = {
          nome: item.name.common,
          capitale: item.capital,
          moneta: item.currencies,
          latitudine: item.latlng[0],
          longitudine: item.latlng[1],
          regione: item.region,
          diminutivo: item.cioc,
          bandiera: item.flags.svg,
          lingua: item.languages,
          googleMaps: item.maps.googleMaps,
          popolazione: item.population,
          zonaOraria: item.timezones,
          dominio: item.tld,
          area: item.area
        };
        return info;
      })
    );
  }
}
