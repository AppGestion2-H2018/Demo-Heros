import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Hero[];
  selectedHero: Hero;
  newHero : Hero;
  displayedColumns = ['id', 'nom', 'actions'];

  constructor(private heroService: HeroService) { }

  getHeros(): void {
      this.heroService.getHeros()
          .subscribe(heros => this.heros = heros);
  }


  onAdd(tableHeros: MatTable<Hero>) {
      this.heroService.addHero(this.newHero)
          .subscribe(hero  => { this.heros.push(hero); this.newHero.nom = ''; tableHeros.renderRows();});
  }

  onSelected(hero: Hero): void {
        this.selectedHero = hero;
  }

    onEdit(): void {
        this.heroService.updateHero(this.selectedHero)
            .subscribe(() => this.selectedHero = null);
    }


    onDelete(hero: Hero): void {
        this.heroService.deleteHero(hero)
            .subscribe(result => this.heros = this.heros.filter(h => h !== hero));
  }

  ngOnInit() {
    console.log('in ngOnInit');
    this.newHero = new Hero();
    this.newHero.nom = '';
    this.getHeros();
  }

}
