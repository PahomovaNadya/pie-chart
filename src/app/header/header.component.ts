import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']//,
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }
  changeStyle(){
    document.getElementById("menu-navig").style.display = (document.getElementById("menu-navig").style.display == "block") ? "none" : "block";
  }
}
