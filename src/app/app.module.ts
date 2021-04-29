import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ArchiveBrowserModule } from './modules/archive-browser/archive-browser.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ArchiveBrowserModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
