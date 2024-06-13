import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  recomendados = [
    {
      titulo: 'Praia de Copacabana',
      descricao: 'Desfrute das belas praias do Rio de Janeiro.',
      imagem: 'assets/copacabana.jpg'
    },
    {
      titulo: 'Parque Nacional de Yellowstone',
      descricao: 'Explore a natureza selvagem dos EUA.',
      imagem: 'assets/yellowstone.jpg'
    },
  ]

  constructor() {}
}
