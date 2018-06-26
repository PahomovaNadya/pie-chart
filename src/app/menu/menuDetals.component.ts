import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-detal',
  templateUrl: './menuDetals.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuDetalsComponent {
  
  @Input() item;
  changeStyle(){
    if(window.innerWidth <= 1279 && window.innerHeight <= 1023) {
      document.getElementById("menu-navig").style.display = "none";
    }
  }
}