import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataStoreModule } from 'src/app/modules/data-store/data-store.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  EmailListComponent,
  EmailPreviewComponent,
  EmailSearchBarComponent,
  ListPaginatorComponent,
} from './components';
import { BrowserComponent } from './containers';

@NgModule({
  imports: [CommonModule, DataStoreModule, ReactiveFormsModule, SharedModule],
  declarations: [
    BrowserComponent,
    EmailListComponent,
    EmailPreviewComponent,
    EmailSearchBarComponent,
    ListPaginatorComponent,
  ],
  exports: [BrowserComponent],
})
export class ArchiveBrowserModule {}
