import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { RegionsService } from '../regions.service'

@Component({
  selector: 'app-braavos',
  templateUrl: './braavos.component.html',
  styleUrls: ['./braavos.component.scss']
})
export class BraavosComponent implements OnInit {
  arya_list:string[]
  braavos:object

  constructor(private messy:MessageService, private reggie:RegionsService) { }

  ngOnInit() {
    this.arya_list = this.messy.getList()
    this.getBraavos()
  }

  getBraavos(){
    this.reggie.getBraavos().subscribe(stuff => {
      this.braavos = stuff
    })
  }
}
