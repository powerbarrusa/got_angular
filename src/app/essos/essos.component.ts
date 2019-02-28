import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../regions.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-essos',
  templateUrl: './essos.component.html',
  styleUrls: ['./essos.component.scss']
})
export class EssosComponent implements OnInit {
  essos:{}
  arya_list:string[]

  constructor(private messy: MessageService, private regions:RegionsService) { }

  ngOnInit() {
    this.arya_list = this.messy.getList()
    this.getEssos()
  }

  getEssos(){
    this.regions.getEssos().subscribe(place => {
      this.essos = place
    })
  }
}
