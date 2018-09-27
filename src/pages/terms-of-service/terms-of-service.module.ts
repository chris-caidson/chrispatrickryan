import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsOfServicePage } from './terms-of-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TermsOfServicePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TermsOfServicePage),
  ],
})
export class TermsOfServicePageModule {}
