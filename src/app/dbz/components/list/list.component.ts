import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];
  
  
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  public onDeleteCharacter(id?: string): void {
    /* console.log(id) */
    if(!id) return;
    this.onDelete.emit(id)

  }
}
