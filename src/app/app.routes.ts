import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
    {path:'', component:TodoListComponent},
    {path:'addTask', component:FormComponent}
];
