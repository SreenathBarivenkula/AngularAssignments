import { Component } from '@angular/core';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent {
  constructor(private superheroService: SuperheroService) {}
  addSuperhero(name: string) {
    if (name.trim() !== '') {
      this.superheroService.addSuperhero(name);
    }
  }
}
