import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './gaurd/auth.guard';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavbarComponent,
    canActivateChild:[authGuard],
    children: [
      { path: 'todo',
        loadChildren:()=>import('./components/todo-list/todo-list.module').then(m=>m.TodoListModule)
      },
      { path: 'kanban', 
        loadChildren:()=>import('./kanban/kanban-board/kanban-board.module').then(m=>m.KanbanBoardModule)
      },
    ],
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}