import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemListComponent } from './item-list/item-list.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import {counterReducer} from "./counter/counter.reducer";
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    CounterComponent,
    MoviesPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
