import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  // Dados do perfil do usuário
  usuario = {
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    foto: 'assets/img/user-profile.jpg'
  };

  // Histórico de viagens
  historicoViagens = [
    { destino: 'Paris, França', data: '20/05/2023 - 30/05/2023' },
    { destino: 'Nova York, EUA', data: '15/07/2023 - 25/07/2023' },
    { destino: 'Tóquio, Japão', data: '10/09/2023 - 20/09/2023' }
  ];

  // Configurações de preferências
  preferencias = {
    notificacoes: true,
    viagem: 'econômica'
  };

  constructor() {}
}
