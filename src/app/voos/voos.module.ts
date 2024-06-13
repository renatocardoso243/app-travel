import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoosPageRoutingModule } from './voos-routing.module';

import { VoosPage } from './voos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoosPageRoutingModule
  ],
  declarations: [VoosPage]
})
export class VoosPageModule {}
