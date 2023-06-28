import { Component } from '@angular/core';
import { InfoPaesiService } from '../data/info-paesi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data?: any[] = []

  constructor(private info: InfoPaesiService) {
    this.info.getInfo().subscribe(response => {
      this.data = response;
      console.log(this.data);

    });
  }

}
