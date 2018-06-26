import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-detal',
  templateUrl: './menuDetals.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuDetalsComponent {
  @Input() item;
  activeLiId:number = 1;
  changeStyle(idmenu){
    if(window.innerWidth <= 1279 && window.innerHeight <= 1023) {
      document.getElementById("menu-navig").style.display = "none";
    }
    let li = document.getElementsByTagName("li");
    for(let i=0; i<li.length; i++){
      li[i].className = "menu-li notactive";
    }
    li[+this.activeLiId].className = "menu-li notactive";
    this.activeLiId = idmenu;
    li[+idmenu].className = "menu-li active";
  }
}