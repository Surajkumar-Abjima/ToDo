import { Routes } from '@angular/router';
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
      { path: 'addTask', loadComponent:()=>import('./components/form/form.component').then(m=>m.FormComponent) },
      { path: 'todo', loadComponent:()=>import('./components/todo-list/todo-list.component').then(m=>m.TodoListComponent) },
      { path: 'kanban', loadComponent:()=>import('./kanban/kanban-board/kanban-board.component').then(m=>m.KanbanBoardComponent)},
    ],
  },
];
