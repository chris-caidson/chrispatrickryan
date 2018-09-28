import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationsPage } from './creations';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CreationsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CreationsPage),
  ],
})
export class CreationsPageModule {}
