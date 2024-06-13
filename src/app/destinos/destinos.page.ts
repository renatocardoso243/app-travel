import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinos',
  templateUrl: 'destinos.page.html',
  styleUrls: ['destinos.page.scss'],
})
export class DestinosPage {
  searchTerm: string = '';
  filter: string = 'popularity';

  destinos = [
    {
      nome: 'Praia de Copacabana',
      descricao: 'Desfrute das belas praias do Rio de Janeiro.',
      imagem: 'assets/copacabana.jpeg',
      preco: 200,
      popularidade: 5,
      avaliacao: 4.5
    },
    {
      nome: 'Parque Nacional de Yellowstone',
      descricao: 'Explore a natureza selvagem dos EUA.',
      imagem: 'assets/yellowstone.jpg',
      preco: 150,
      popularidade: 4,
      avaliacao: 4.8
    },
    // destinos
  ];

  filteredDestinos = [...this.destinos];

  constructor(private router: Router) {}

  filterDestinations(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredDestinos = this.destinos.filter(destino => {
      return destino.nome.toLowerCase().includes(searchTerm);
    });
  }

  applyFilter() {
    if (this.filter === 'price') {
      this.filteredDestinos.sort((a, b) => a.preco - b.preco);
    } else if (this.filter === 'popularity') {
      this.filteredDestinos.sort((a, b) => b.popularidade - a.popularidade);
    } else if (this.filter === 'rating') {
      this.filteredDestinos.sort((a, b) => b.avaliacao - a.avaliacao);
    }
  }

  adicionarAoItinerario(destino: any) {
    console.log('Adicionar ao itinerário:', destino);

  }
}
