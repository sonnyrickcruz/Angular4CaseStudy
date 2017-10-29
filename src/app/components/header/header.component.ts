import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public logosPath = "assets/Logos/";
  constructor() { }

  ngOnInit() {
  }

  getLogoLink() {
    return this.logosPath + "kplogo.png";
  }

}
