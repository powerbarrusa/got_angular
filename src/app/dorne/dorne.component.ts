import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'
import { RegionsService } from '../regions.service'

@Component({
  selector: 'app-dorne',
  templateUrl: './dorne.component.html',
  styleUrls: ['./dorne.component.scss']
})
export class DorneComponent implements OnInit {
  arya_list:string[];
  dorne:{};
  
  constructor(private messy: MessageService, private regions:RegionsService) { }

  ngOnInit() {
    this.arya_list = this.messy.getList()
    this.getStuff()
  }

  getStuff(){
    this.regions.getDorne().subscribe(payload=>{
      this.dorne = payload;
    })
  }
}
