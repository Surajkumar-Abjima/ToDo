import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'http://localhost:3000/data';
  private sharedData = new BehaviorSubject<any[]>([]);
  data$ = this.sharedData.asObservable();
  constructor(private http: HttpClient) {}

  fetchData(){
    this.http.get(this.api).subscribe((res:any)=>{
      this.sharedData.next(res)
    })
  }
}
