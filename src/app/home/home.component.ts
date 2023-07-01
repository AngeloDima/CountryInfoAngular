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
  paese: string = "russia";


  constructor(private info: InfoPaesiService) { }

  ngOnInit(): void {
    this.getInfoByPaese(this.paese);
  }

  getInfoByPaese(paese: string) {
    // Chiamiamo il metodo getInfo() sull'oggetto 'info' per ottenere le informazioni sul paese specificato
    this.info.getInfo(paese).subscribe(response => {
      // Controlliamo se il nome ricevuto dalla risposta è diverso dal nome presente nei dati correnti
      if (this.data?.nome !== response.nome) {
        // Se i nomi sono diversi, impostiamo 'data' su null
        this.data = null;
        // Attendiamo 100 millisecondi utilizzando setTimeout()
        setTimeout(() => {
          // Assegniamo la risposta a 'data' dopo l'attesa
          this.data = response;
        }, 0);
      }
    });
  }



}

