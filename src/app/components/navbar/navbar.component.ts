import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
}
