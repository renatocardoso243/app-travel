import { Component } from '@angular/core';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.page.html',
  styleUrls: ['./itinerario.page.scss'],
})
export class ItinerarioPage {
  reservas: { tipo: string; detalhes: string }[] = [
    { tipo: 'Voo', detalhes: 'São Paulo - Nova York, 15/07/2024' },
    { tipo: 'Hotel', detalhes: 'Hotel Central, Nova York, 15/07/2024 - 20/07/2024' },
    { tipo: 'Atividade', detalhes: 'Tour pela Estátua da Liberdade, 16/07/2024' }
  ];

  dataViagem: string = '';
  novaAtividade: string = '';

  constructor() {}

  adicionarAtividade() {
    if (this.novaAtividade) {
      this.reservas.push({ tipo: 'Atividade', detalhes: this.novaAtividade });
      this.novaAtividade = '';
    }
  }

  compartilharItinerario() {
    console.log('Itinerário compartilhado!');
  }
}
