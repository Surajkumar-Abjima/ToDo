import { Component, inject } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kanban-board',
  imports: [ ColumnComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
  private http=inject(HttpClient)

  ngOnInit(){
    this.http.get('https://dummyjson.com/user/me').subscribe((res)=>{
      console.log(res);
      
    })
  }

}
