import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuperheroComponent } from './add-superhero/add-superhero.component';
import { ListSuperheroesComponent } from './list-superheroes/list-superheroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-superhero', pathMatch: 'full' },
  { path: 'add-superhero', component: AddSuperheroComponent },
  { path: 'list-superheroes', component: ListSuperheroesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
