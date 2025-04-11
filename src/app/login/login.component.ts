import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone:false,
  // imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj = {
    username: '',
    password: '',
  };

  constructor(private route: Router, private http: HttpClient) {}

  // handleChange() {
  //   // console.log(this.loginObj.evalue);
  // }

  handleLogin() {
    this.http.post('https://dummyjson.com/auth/login', this.loginObj).subscribe(
      (res: any) => {
        console.log(res.accessToken);
        localStorage.setItem("UserData",res.accessToken)
        // console.log(res.firstName);
        this.route.navigate(['/kanban']);
      },
      (error) => {
        alert('Inavlid credential');
        // console.log(this.loginObj);
      }
    );
  }
}