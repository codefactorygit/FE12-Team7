import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {

  constructor() { }

  newsUpdates = [
     {
      topic: "The Top Programming Languages Entrepreneurs Should Know in 2021",
      text: "Entrepreneurs have to juggle a lot of responsibilities, which often requires many skill-sets. As such, it's important for entrepreneurs to invest in their professional development. One of the most important skills for modern business? Coding.  You don't have to have a computer science degree to be a coder.",
      img: "../assets/img/news2.jpeg",
      link: "https://www.entrepreneur.com/article/361870"
    }, {
      topic: "Architecting a successful career in Angular - The Story of Natalia Venditto",
      text: "Today, meet Natalia Venditto — a Google Developer Expert in Angular, and an architecture student turned Principal Solutions Architect.",
      img: "../assets/img/news3.jpeg",
      link: "https://blog.angular.io/natalia-venditto-architecting-a-career-in-angular-51af4ca5cb1a"
    },  {
      topic: "Rise of the Panda or The Story of the First Austrian Unicorn",
      text: "One of the bigger startups in Europe operating a trading platform for cryptocurrency has closed a big round of funding on the heels of very rapid growth, and plans to open its platform to a wider stream of assets.",
      img: "../assets/img/news5.jpeg",
      link: "https://techcrunch.com/2021/03/15/neobroker-bitpanda-raises-170m-at-a-1-2b-valuation-to-take-its-trading-platform-beyond-crypto/"
    }, {
      topic: "'Want to Become a Programmer? The Truth Behind 10 Common Myths",
      text: "Thanks to strong demand and high median annual wages, more and more people are pursuing careers as computer programmers. But many people are discouraged by myths they hear about what it takes to become a coding whiz. Today I want to debunk those myths, so anyone who wants to learn new skills or earn more money can move more swiftly toward a job in this industry. Here’s the truth behind 10 common myths about becoming a developer.",
      img: "../assets/img/news6.jpeg",
      link: "https://www.brazen.com/blog/archive/career-growth/want-to-become-a-programmer-the-truth-behind-10-common-myths"
    }, 
  ]

  ngOnInit(): void {
  }

}
