import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BlogPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlogPage),
  ],
})
export class BlogPageModule {}
