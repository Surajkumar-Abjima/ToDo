import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';
import { ColumnComponent } from '../column/column.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [KanbanBoardComponent,ColumnComponent],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    FormsModule,
    
  ]
})
export class KanbanBoardModule { }
