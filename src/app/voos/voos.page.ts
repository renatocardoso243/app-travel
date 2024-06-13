import { Component } from '@angular/core';

@Component({
  selector: 'app-voos',
  templateUrl: 'voos.page.html',
  styleUrls: ['voos.page.scss'],
})
export class VoosPage {
  searchData = {
    origem: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    passageiros: 1
  };

  constructor() {}
}
