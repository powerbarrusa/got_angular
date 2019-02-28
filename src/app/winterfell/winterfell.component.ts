import { Component, OnInit, Optional } from '@angular/core';
import {RegionsService} from '../regions.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service'


@Component({
  selector: 'app-winterfell',
  templateUrl: './winterfell.component.html',
  styleUrls: ['./winterfell.component.scss']
})
export class WinterfellComponent implements OnInit {
  zone:Object;
  arya_list:string[];
  nametoadd:string;
  toremove:string;

  constructor(private regions:RegionsService, private route: ActivatedRoute, private messy: MessageService) { }
  ngOnInit() {
  this.arya_list = this.messy.getList()
  this.getStuff()
  }

  getStuff(){
    this.regions.getData().subscribe(payload=>{
      this.zone = payload;
    })
  }

  seeName(e){
    this.nametoadd = e.target.value
  }

  addName(){
    this.messy.arya_list.push(this.nametoadd)
  }

  removeName(){
    return this.messy.arya_list = this.messy.arya_list.filter(element => {
      return element !== this.toremove
    })
  }

  nameToRemove(e){
    this.toremove = e.target.value
    console.log(this.toremove)
  }

  clickPhoto(){
    console.log("clicked!")
  }
 

}
