import { Component } from '@angular/core';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.component.html',
  styleUrls: ['./list-superheroes.component.css']
})
export class ListSuperheroesComponent {
  superheroes: string[] = [];
  constructor(private superheroService: SuperheroService) {}
  ngOnInit() {
    this.superheroes = this.superheroService.getSuperheroes();
  }
}
