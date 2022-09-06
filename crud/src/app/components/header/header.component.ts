import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagem = "https://avatars.githubusercontent.com/u/38729977?s=200&v=4"
  constructor() {

  }

  ngOnInit(): void {
  }

}
