import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookiePolicyPage } from './cookie-policy';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CookiePolicyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CookiePolicyPage),
  ],
})
export class CookiePolicyPageModule {}
