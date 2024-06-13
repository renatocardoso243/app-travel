import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  recomendados = [
    {
      titulo: 'Praia de Copacabana',
      descricao: 'Desfrute das belas praias do Rio de Janeiro.',
      imagem: 'assets/copacabana.jpeg'
    },
    {
      titulo: 'Parque Nacional de Yellowstone',
      descricao: 'Explore a natureza selvagem dos EUA.',
      imagem: 'assets/yellowstone.jpg'
    },
    {
      titulo: 'Fernando de Noronha',
      descricao: 'Conheça praias deslumbrantes, vida marinha rica e paisagens naturais preservadas.',
      imagem: 'assets/fernandodenoronha.webp'
    },
    {
      titulo: 'Maragogi',
      descricao: 'Destino turístico famoso por suas piscinas naturais cristalinas no litoral do Alagoas.',
      imagem: 'assets/maragogi.jpg'
    },
    {
      titulo: 'Porto de Galinhas',
      descricao: 'Popular praia em Pernambuco, Brasil, conhecida por suas águas claras, piscinas naturais e belos recifes de corais.',
      imagem: 'assets/porto-de-galinhas.jpg'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDestinos() {
    this.router.navigate(['/destinos']);
  }

  verVoos() {
    this.router.navigate(['/voos']);
  }

  verHoteis() {
    this.router.navigate(['/hoteis']);
  }

  verPacotes() {
    this.router.navigate(['/pacotes']);
  }

  verPerfil() {
    this.router.navigate(['/perfil']);
  }

  verAssinatura() {
    this.router.navigate(['/assinatura']);
  }

  verItinerario() {
    this.router.navigate(['/itinerario']);
  }

  sairApp() {
    this.router.navigate(['/home']);
  }
}
