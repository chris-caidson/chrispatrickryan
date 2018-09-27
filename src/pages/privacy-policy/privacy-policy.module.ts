import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacyPolicyPage } from './privacy-policy';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PrivacyPolicyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PrivacyPolicyPage),
  ],
})
export class PrivacyPolicyPageModule {}
