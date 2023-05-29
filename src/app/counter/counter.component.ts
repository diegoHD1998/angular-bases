import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <hr>
    <p>Counter: {{counter}}</p>
    
    <button (click)="descreaseBy(1)">-1</button>
    <button (click)="(resetCounter())">reset</button>
    <button (click)="increaseBy(1)">+1</button>
    
    <hr>
    `
})

export class CounterComponent {
    public counter: number = 0;

    descreaseBy(value: number): void{
     this.counter -= value;   
    }

    increaseBy(value: number): void{
     this.counter += value;   
    }

    resetCounter(): void{
     this.counter = 0;   
    }
}
