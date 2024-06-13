import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoosPage } from './voos.page';

const routes: Routes = [
  {
    path: '',
    component: VoosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoosPageRoutingModule {}
