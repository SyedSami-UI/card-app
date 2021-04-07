import { Component, OnInit } from '@angular/core';
import { MOCKDATA } from '../mock-data';

@Component({
  selector: 'app-mac-card',
  templateUrl: './mac-card.component.html',
  styleUrls: ['./mac-card.component.css']
})
export class MacCardComponent implements OnInit {
  breakpoint: number;

  mockData = MOCKDATA;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: { target: { innerWidth: number; }; }) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
