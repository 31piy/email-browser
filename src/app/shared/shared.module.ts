import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SimpleListPipe } from './pipes/simple-list.pipe';

@NgModule({
  declarations: [HighlightDirective, LoaderComponent, SimpleListPipe],
  exports: [HighlightDirective, LoaderComponent, SimpleListPipe],
})
export class SharedModule {}
