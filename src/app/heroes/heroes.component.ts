import { Component, OnInit } from '@angular/core';
//Hero interface
import { Hero } from '../hero';
//Hero service
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

//metadata object
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//always to export component clas so we can import it elsewhere
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }//, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  //heroes = HEROES;
  //empty list of Hero
  heroes: Hero[] = [];

  // selectedHero?: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id: ${hero.id}`);
  // }

  //get hero list using hero service
  //same function as in hero service
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    //use subscribe to connect observables to observable events
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    alert("Adding Hero");
    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero( { name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
