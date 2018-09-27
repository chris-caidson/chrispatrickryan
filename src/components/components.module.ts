import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { PageFooterComponent } from './page-footer/page-footer';

@NgModule({
	declarations: [
    NavigationComponent,
    PageFooterComponent,
    PageFooterComponent],
	imports: [],
	exports: [
    NavigationComponent,
    PageFooterComponent,
    PageFooterComponent]
})
export class ComponentsModule {}
