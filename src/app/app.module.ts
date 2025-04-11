import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
// import { FormComponent } from './components/form/form.component';
import { Dialog, DialogModule } from 'primeng/dialog';
// import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButton, RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { FormComponent } from './components/form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { KanbanBoardComponent } from './kanban/kanban-board/kanban-board.component';
import { ColumnComponent } from './kanban/column/column.component';
import { tokenInterceptor } from './intercept/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    LoginComponent,
    // add other components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    FloatLabelModule,
    BrowserAnimationsModule,
    // add other modules here
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
