import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientPageComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
