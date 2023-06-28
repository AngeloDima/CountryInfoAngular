import { Component, OnInit } from '@angular/core';
import { InfoPaesiService } from '../data/info-paesi.service';
import { HomeInfo } from '../datiShape/home-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: HomeInfo | null = null;
  paese: string = "italy";


  constructor(private info: InfoPaesiService) { }

  ngOnInit(): void {
    this.getInfoByPaese(this.paese);
  }

  getInfoByPaese(paese: string) {
    this.info.getInfo(paese).subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}

