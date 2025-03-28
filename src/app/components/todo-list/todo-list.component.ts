import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  private api = "http://localhost:3000/data"
  data: any = [];
  editingItem: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.api).subscribe((res) => {
      this.data = res;
      console.log(this.data);

    },
      (error) => {
        console.log(error);

      })
  }

  editItem(item: any) {
    this.editingItem = { ...item }
  }

  saveItem() {
    if (this.editingItem) {
      this.http.put(`${this.api}/${this.editingItem.id}`, this.editingItem).subscribe(() => {
        const index = this.data.findIndex((item: any) => item.id === this.editingItem.id)
        if (index! - 1) {
          this.data[index] = { ...this.editingItem }
        }
        this.editingItem = null;
        alert(`updated successfully`)
      },
        (error) => {
          console.log(error);

        }
      )
    }
  }
  cancelEdit() {
    this.editingItem = null
  }

  deleteItem(item: any) {
    this.http.delete(`${this.api}/${item.id}`).subscribe(() => {
      this.data = this.data.filter((i: any) =>
        i.id != item.id
      )
      alert("data deleted successfully")
    })
  }
}
