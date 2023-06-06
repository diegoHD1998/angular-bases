import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from "uuid";

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin', 
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku', 
            power: 12000
        },
        {
            id: uuid(),
            name: 'Vegetta', 
            power: 10000
        },
        {
            id: uuid(),
            name: 'Brooly', 
            power: 15000
        },
    ]

    public addCharacter(character: Character): void {
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }
        this.characters.push(newCharacter)
        console.log(this.characters)
    }

    public deleteCharacter(id: string): void {
        console.log(id)
        this.characters = this.characters.filter( character => character.id !== id)

    }
}