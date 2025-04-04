  import { HttpClient, provideHttpClient } from '@angular/common/http';
  import { Component, inject } from '@angular/core';
  import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    Validators,
  } from '@angular/forms';
  import { Router } from '@angular/router';
  import { Dialog } from 'primeng/dialog';
  import { ButtonModule } from 'primeng/button';
  import { InputTextModule } from 'primeng/inputtext';
  import { ReactiveFormsModule } from '@angular/forms';
  import { RadioButton } from 'primeng/radiobutton';
  import { CommonModule } from '@angular/common';
  import { FloatLabel } from 'primeng/floatlabel';
  import { ApiService } from '../../services/api.service';
import { SharedDataService } from '../../services/shared-data.service';

  @Component({
    selector: 'app-form',
    imports: [
      FormsModule,
      Dialog,
      ButtonModule,
      InputTextModule,
      ReactiveFormsModule,
      RadioButton,
      FloatLabel,
    ],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
  })
  export class FormComponent {
    seletedProgress: string = '';
    private api = 'http://localhost:3000/data';
    private fb=inject(FormBuilder);
    myform:FormGroup

    visible: boolean = false;

    toggleVisibility() {
      this.visible = !this.visible;
    }

    statuses = ['To-Do', 'In Progress', 'In QA', 'Completed'];
    selectedProgress: string = '';

    constructor(
      private http: HttpClient,
      private router: Router,
      private apiService: ApiService,
      private sharedServices:SharedDataService
    ) {
      this.myform = new FormGroup({
        task: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
      });
      this.myform = this.fb.group({
        task: ['', [Validators.required,,]],
        description: ['', Validators.required],
        status: ['', Validators.required],
      });

    }

    handleSubmit() {
      console.log(this.myform)
      if (!this.myform.valid){
        this.visible = true;
        return alert("Fields are empty")
      }
        this.http.post(this.api, this.myform.value).subscribe(() => {
          alert('Data added successfully');
          // this.myform.reset();
          this.apiService.fetchData();
          this.visible = false;
        });
    }
    ngOnInit(){
      this.sharedServices.currentData$.subscribe((data)=>{
        if(data){
          debugger
          this.myform.patchValue(data);
          this.visible=true
        }
      })

    }
  }
