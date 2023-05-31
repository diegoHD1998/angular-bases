import { Component } from '@angular/core';
import { Character } from '../interfaces/Character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    public characters: Character[] = [
        {name: 'Krillin', power: 1000},
        {name: 'Goku', power: 12000},
        {name: 'Vegetta', power: 10000},
        {name: 'Brooly', power: 15000},
    ]
}