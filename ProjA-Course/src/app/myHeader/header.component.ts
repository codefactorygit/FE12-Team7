import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mediaQuery.addListener(this.handleTabletChange);  
  }

  showHide(): void {
    let icon: HTMLElement = document.getElementById("myLinks");
    let header: HTMLElement = document.querySelector("header");

    if (icon.style.display === "block") {
      icon.style.display = "none";
      header.style.height = "initial";
    } else {
      icon.style.display = "block";
      // header.style.height = "24em";
    }
  }

  handleTabletChange(e) {
    if (e.matches) {
      window.alert('Media Query Matched!');
    }
  }

  mediaQuery = window.matchMedia('(max-width: 1050px)');

}
