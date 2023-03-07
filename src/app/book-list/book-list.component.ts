import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/Ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // aktueller Book-Store als Array vom Type IBook
  books: IBook[] = [];
  // bookmode ist eine Art View-Modus der entweder das Book-Objekt oder null enthält
  bookmode: IBook | null = null;

  constructor() {
    this.bookmode = null;
    this.books = [
      {
        isbn: '12345',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut'
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '2022-07-15',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/backen.png',
        description: 'Tolle Backtipps für Mensch und Tier'
      },
      {
        isbn: '45678',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut'
      },
    ];
  }

  @Output() clickToBookParent = new EventEmitter();

  ngOnInit(): void {
  }

  showList() {
    this.bookmode = null;
  }

  showDetails(book: IBook) {
    console.log("doSelect-Event:");
    console.log(book);
    this.bookmode = book;
    this.clickToBookParent.emit();
  }
}
