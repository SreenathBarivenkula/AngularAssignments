import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSuperheroComponent } from './add-superhero/add-superhero.component';
import { ListSuperheroesComponent } from './list-superheroes/list-superheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSuperheroComponent,
    ListSuperheroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
