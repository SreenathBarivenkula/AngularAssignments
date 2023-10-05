
import { Injectable } from '@angular/core';
@Injectable({

providedIn: 'root'
})
export class SuperheroService {
private superheroes: string[] = [];
constructor() { }
addSuperhero(superhero: string) {
 this.superheroes.push(superhero);
}
getSuperheroes() {
return this.superheroes;
}
}
