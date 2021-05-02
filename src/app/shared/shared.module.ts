import { NgModule } from '@angular/core';

import { LoaderComponent } from './components';
import { HighlightDirective } from './directives';
import { SimpleListPipe } from './pipes';

@NgModule({
  declarations: [HighlightDirective, LoaderComponent, SimpleListPipe],
  exports: [HighlightDirective, LoaderComponent, SimpleListPipe],
})
export class SharedModule {}
