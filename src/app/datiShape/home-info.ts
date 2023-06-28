export class HomeInfo {

  nome?: string;
  capitale?: string;
  moneta?: string[];
  latitudine?: number;
  longitudine?: number;
  regione?: string;
  diminutivo?: string;
  bandiera?: string;
  lingua?: string;
  googleMaps?: string;
  popolazione?: number;
  zonaOraria?: string;
  dominio?: string;
  area?: number;
  constructor(nome: string, capitale: string, moneta: string[], latitudine: number, longitudine: number, regione: string, diminutivo: string,
    bandiera: string, lingua: string, googleMaps: string, popolazione: number, zonaOraria: string, dominio: string, area: number) {

    this.nome = nome;
    this.capitale = capitale;
    this.moneta = moneta;
    this.latitudine = latitudine;
    this.longitudine = longitudine
    this.regione = regione;
    this.diminutivo = diminutivo;
    this.bandiera = bandiera;
    this.lingua = lingua;
    this.googleMaps = googleMaps;
    this.popolazione = popolazione;
    this.zonaOraria = zonaOraria;
    this.dominio = dominio;
    this.area = area

  }

}


