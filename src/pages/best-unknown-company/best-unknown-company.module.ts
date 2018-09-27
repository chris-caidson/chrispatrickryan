import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestUnknownCompanyPage } from './best-unknown-company';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BestUnknownCompanyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BestUnknownCompanyPage),
  ],
})
export class BestUnknownCompanyPageModule {}
