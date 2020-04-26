import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // Utilizado para alternar o menu em telas pequenas ao clicar no botão de menu  
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += "w3-show";
    } else {
      x.className = x.className.replace("w3-show", " ");
    }

  }

  



}
