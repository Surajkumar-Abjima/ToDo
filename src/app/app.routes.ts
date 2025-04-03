import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavbarComponent,
    canActivateChild:[authGuard],
    children: [
      { path: 'addTask', component: FormComponent },
      { path: 'todo', component: TodoListComponent },
      { path: 'kanban', component: KanbanBoardComponent },
    ],
  },
];
