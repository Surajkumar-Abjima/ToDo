import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userTask: string = '';
  seletedProgress: string = '';
  private api='http://localhost:3000/data'

  constructor(private http:HttpClient){}

  handleSubmit(form: any) {
    
      console.log('User Task:', this.userTask);
      console.log('Selected Progress:', this.seletedProgress);

      if(this.userTask && this.seletedProgress){
        const newEntry={
          task:this.userTask,
          status:this.seletedProgress
        }
        this.http.post(this.api,newEntry).subscribe(()=>{
          alert("Data added successfully");
          form.reset()
        })
      }

      form.reset();
    
  }
}
