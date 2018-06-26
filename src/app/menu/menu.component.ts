import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromosService } from './../promos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [PromosService]
})
export class MenuComponent implements OnInit {
  dataArray = [];
  patientInfo = [];
  constructor(private menuLine: PromosService, private http: HttpClient) { }

  ngOnInit() {
    this.menuLine.getJSON('menu').subscribe(patientInfo =>{ 
      this.dataArray = patientInfo.menus;
    });
  }
}
