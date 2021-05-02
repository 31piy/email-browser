import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { SimpleListPipe } from './pipes/simple-list.pipe';

@NgModule({
  declarations: [LoaderComponent, SimpleListPipe],
  exports: [LoaderComponent, SimpleListPipe],
})
export class SharedModule {}
