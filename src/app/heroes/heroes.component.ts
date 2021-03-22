import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Color } from '../color';
import { HeroService } from '../hero.service';
import { PhpSqlApiService } from '../php-sql-api.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  color: Color[];

  constructor(private heroService: HeroService,private PhpSqlApiService: PhpSqlApiService) { }

  ngOnInit() {
    this.getHeroes();
    this.getcolor();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  getcolor(): void {
    this.PhpSqlApiService.getallcolor()
    .subscribe(color => this.color = color);
  }
  getColor(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}