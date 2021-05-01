import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { EmailSearchBarComponent } from './components/email-search-bar/email-search-bar.component';
import { ListPaginatorComponent } from './components/list-paginator/list-paginator.component';
import { ListStatsComponent } from './components/list-stats/list-stats.component';
import { BrowserComponent } from './containers/browser/browser.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BrowserComponent,
    EmailListComponent,
    EmailPreviewComponent,
    EmailSearchBarComponent,
    ListPaginatorComponent,
    ListStatsComponent,
  ],
  exports: [BrowserComponent],
})
export class ArchiveBrowserModule {}
