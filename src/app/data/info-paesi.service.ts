import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HomeInfo } from '../datiShape/home-info';

@Injectable({
  providedIn: 'root'
})
export class InfoPaesiService {

  constructor(private http: HttpClient) { }

  url: string = "https://restcountries.com/v3.1/all"

  getInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((Response: any[]) => {
        return Response.map(item => {
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
          return info as HomeInfo
        })
      })
    )

  }

}



