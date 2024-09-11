import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCards(): Card[] {
    return [{
      title: 'JavaScript',
      description:'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    }, {
      title: 'Angular & React',
      description:'With extensive experience in both Angular and React, I’ve worked on numerous projects where these frameworks have been pivotal in building dynamic, responsive web applications. Angular has been particularly useful for structuring large-scale applications with its powerful CLI and dependency injection system, while React’s component-based architecture allowed me to efficiently manage UI states across complex interfaces. I’ve leveraged Angular’s two-way data binding and React’s virtual DOM to ensure seamless user experiences. Working with these frameworks has taught me how to balance performance and maintainability while keeping up with best practices.'
    }, {
      title: 'Sql Server',
      description:'With substantial experience in SQL Server, I’ve managed database design, optimization, and query building across various projects. From writing complex stored procedures to optimizing performance with indexing and query tuning, SQL Server has been integral to ensuring data integrity and fast access. I’ve also worked extensively with functions, triggers, and views to streamline business logic within the database. My work has involved handling large datasets efficiently while maintaining a high level of security and reliability, making SQL Server a key component of my backend development experience.'
    }];
  }


}

interface Card {
  title: string;
  description: string;
}
