import { Component, Inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, ButtonModule, FormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router:Router){}
  @ViewChild(FormComponent)show!:(FormComponent)
  
  handleLogOut(){
    localStorage.removeItem("UserData");
    this.router.navigate([''])
  }
  toggleButton(){
    this.show.toggleVisibility()
  }
    
}
