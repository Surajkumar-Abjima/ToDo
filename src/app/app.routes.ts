import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';

export const routes: Routes = [
    {path:'', component:TodoListComponent},
    {path:'addTask', component:FormComponent},
    {path:'kanban',component:KanbanBoardComponent}
];
