import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunction() {
    var iconElm = document.getElementById('icon');
    var el = document.getElementById("myTopnav");
    if (el.className === "navContainer") {
      el.className += " responsive";
      iconElm.textContent ='X';
    } else {
      el.className = "navContainer";
      iconElm.textContent ='☰';
    }
  }
}
