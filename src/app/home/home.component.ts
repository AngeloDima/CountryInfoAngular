import { Component } from '@angular/core';
import { InfoPaesiService } from '../data/info-paesi.service';
import { HomeInfo } from '../datiShape/home-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: HomeInfo[] = [];

  constructor(private info: InfoPaesiService) {
    this.info.getInfo().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}


