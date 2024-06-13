import { Component } from '@angular/core';

@Component({
  selector: 'app-hoteis',
  templateUrl: 'hoteis.page.html',
  styleUrls: ['hoteis.page.scss'],
})
export class HoteisPage {
  searchData = {
    destino: '',
    checkin: '',
    checkout: '',
    hospedes: 1
  };

  filter: string = 'price';

  filteredHotels = [
    {
      nome: 'Premium Hotel',
      preco: 200,
      avaliacao: 4.5,
      distancia: 1,
      imagem: 'assets/hotel1.jpg'
    },
    {
      nome: 'Summit Hotels',
      preco: 150,
      avaliacao: 4.0,
      distancia: 2,
      imagem: 'assets/hotel2.jpg'
    },
    {
      nome: 'Paris Hotel',
      preco: 400,
      avaliacao: 5.0,
      distancia: 2,
      imagem: 'assets/hotel3.jpg'
    },

  ];

  constructor() {}
}
