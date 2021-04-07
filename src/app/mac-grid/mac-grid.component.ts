import { Component, OnInit } from '@angular/core';
import { MOCKDATA } from '../mock-data';

@Component({
  selector: 'app-mac-grid',
  templateUrl: './mac-grid.component.html',
  styleUrls: ['./mac-grid.component.css']
})
export class MacGridComponent implements OnInit {
  breakpoint: number;


  mockData = MOCKDATA;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: { target: { innerWidth: number; }; }) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  gridColumns = 2;

}
