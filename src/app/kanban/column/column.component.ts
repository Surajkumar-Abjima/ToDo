import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import this
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-column',
  imports: [CommonModule,FormsModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  private api = 'http://localhost:3000/data'
  data: any = []
  editingItem:any=null
  statuses=['To-Do','In Progress', 'In QA', 'Completed']
  constructor(private http: HttpClient) { }


  ngOnInit(): void{
    this.http.get(this.api).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    })
  }

  editItem(item:any){
    this.editingItem={...item}
  }

  saveItem() {
    if (this.editingItem) {
      this.http.put(`${this.api}/${this.editingItem.id}`, this.editingItem).subscribe(() => {
        const index = this.data.findIndex((item: any) => item.id === this.editingItem.id);
  
        if (index !== -1) {  
          this.data[index] = { ...this.editingItem };  
        }
  
        this.editingItem = null; 
        alert('Updated Successfully');
      }, (error) => {
        console.error("Error updating item:", error);
      });
    }
  }
  
  cancelEdit(){
    this.editingItem=null
  }

  filterTask(status:string){
    return this.data.filter((task: any)=>task.status===status)
  }
  deleteItem(task:any){
    this.http.delete(`${this.api}/${task.id}`).subscribe(()=>{
      this.data=this.data.filter((i:any)=>i.id!==task.id)
      alert("item deleted successfully")
    },
  (error)=>{
    console.log(error);
    
  })
  }

}
