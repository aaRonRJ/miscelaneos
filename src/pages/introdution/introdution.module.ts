import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntrodutionPage } from './introdution';

@NgModule({
  declarations: [
    IntrodutionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntrodutionPage),
  ],
})
export class IntrodutionPageModule {}
