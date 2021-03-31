import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //media query from window for tablet - to - desktop size
  mediaQueryMin = window.matchMedia('(min-width: 1051px)');

  constructor() {
    //add listener to window media query
    this.mediaQueryMin.addListener(this.handleTabletChange);
  }

  ngOnInit(): void {
  }

  //method show hide mobile navbar
  toggleMobileNav(): void {
    //mobile nav element
    let navElementMobile: HTMLElement = document.getElementById("navMobile");

    //on click - if visible hide it, else hidden show it 
    if (navElementMobile.style.display === "block") {
      navElementMobile.style.display = "none";
    } else {
      navElementMobile.style.display = "block";
    }

  }

  //method called by window listener 
  //handling case: if menu open, screen size is suddenly widened - closes open mobile menue and changes to desktop  
  handleTabletChange(e) {
    //mobile navbar
    let navbarMobile: HTMLElement = document.getElementById("navMobile");
    //if screen size matches close mobile navbar
    if (e.matches) {
      navbarMobile.style.display = "none";
    }
  }
}