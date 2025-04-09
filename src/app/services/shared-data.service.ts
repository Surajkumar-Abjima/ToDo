import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private editData=new BehaviorSubject<any>(null)
  currentData$=this.editData.asObservable()

  private http=inject(HttpClient)
  private api='http://localhost:3000/data'
  private sharedApi=inject(ApiService)

  constructor() { }

  sendData(data:any){
    // console.log(data);
    this.editData.next(data)
  }

  clearSendData(){
    this.editData.next(null)
  }

  updateData(data:any,id:any){
    this.http.put(`${this.api}/${id}`,data).subscribe(()=>{
      this.sharedApi.fetchData()
    })
  }

}
