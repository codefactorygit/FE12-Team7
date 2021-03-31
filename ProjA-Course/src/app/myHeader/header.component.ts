import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mediaQueryMin = window.matchMedia('(min-width: 1051px)');

  constructor() {
    this.mediaQueryMin.addListener(this.handleTabletChange);
  }

  ngOnInit(): void {
  }

  toggleMobileNav(): void {
    let navElementMobile: HTMLElement = document.getElementById("navMobile");

    if (navElementMobile.style.display === "block") {
      navElementMobile.style.display = "none";
    } else {
      navElementMobile.style.display = "block";
    }

  }

  handleTabletChange(e) {
    let navbarMobile: HTMLElement = document.getElementById("navMobile");
    if (e.matches) {
      navbarMobile.style.display = "none";
    }
  }
}