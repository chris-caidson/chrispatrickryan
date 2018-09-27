import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { PageHeaderComponent } from './page-header/page-header';
import { PageFooterComponent } from './page-footer/page-footer';
@NgModule({
	declarations: [NavigationComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageFooterComponent],
	imports: [],
	exports: [NavigationComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageFooterComponent]
})
export class ComponentsModule {}
