import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './details/details.component';
import { HighlightDirective } from './highlight.directive';
import { CountPipePipe } from './count-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailsComponent,
    HighlightDirective,
    CountPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
