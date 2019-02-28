import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  arya_list:string[] = ["The Hound"];

  getList(){
    return this.arya_list
  }
  
  constructor() { }
}
