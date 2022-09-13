import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgGlobal = 'https://uploads-ssl.webflow.com/620d46c6d77bb82d692b9e39/62605d3d8f2a22550a25a752_mapa-global-semantix-p-1600.png'

  constructor() { }

  ngOnInit(): void {
  }

}
