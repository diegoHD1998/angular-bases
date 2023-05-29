import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironMan";
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  } 

  changeHeroe():void{
    this.name = 'SpiderMan';
  }

  changeAge(): void{
    this.age = 16;
  }
}
