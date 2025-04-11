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
  import moment from 'moment'

  @Component({
    selector: 'app-form',
    standalone:false,
    // imports: [
    //   FormsModule,
    //   Dialog,
    //   ButtonModule,
    //   InputTextModule,
    //   ReactiveFormsModule,
    //   RadioButton,
    //   FloatLabel,
    // ],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
  })
  export class FormComponent {
    seletedProgress: string = '';
    private api = 'http://localhost:3000/data';
    private fb = inject(FormBuilder);

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
      private sharedServices: SharedDataService
    ) {}
    myform = new FormGroup({
      task: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      daystoAdd: new FormControl('', Validators.required)
    });
    isEditingMode = false;
    editingId: number | null = null;



    ngOnInit() {
      this.sharedServices.currentData$.subscribe((user) => {
        if (user) {
          this.editingId = user.id;
          this.isEditingMode = true;
          this.myform.patchValue(user);
          this.visible = true;
        }
      });
    }
    handleSubmit() {
      console.log(this.myform);
      const days=this.myform.value.daystoAdd || 0
      const duedate=moment().add(+days,'days').format('YYYY-MM-DD')
      if (!this.myform.valid) {
        this.visible = true;
        return alert('Fields are empty');
      }
      const formData = {...this.myform.value,duedate:duedate};
      if (this.isEditingMode) {
        this.sharedServices.updateData(formData, this.editingId);
      } else {
        this.http.post(this.api, formData).subscribe(() => {
          alert('Data added successfully');
          this.apiService.fetchData();
        });
      }
      this.visible = false;
      this.sharedServices.clearSendData();
      this.myform.reset();
      this.isEditingMode = false;
    }
  }
