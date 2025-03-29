import { Component } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-kanban-board',
  imports: [ ColumnComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
}
