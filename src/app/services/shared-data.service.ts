import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private editData=new BehaviorSubject<any>(null)
  currentData$=this.editData.asObservable()

  constructor() { }

  sendData(data:any){
    this.editData.next(data)
  }
}
