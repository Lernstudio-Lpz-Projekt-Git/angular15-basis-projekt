import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/Ibook';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book?: IBook;
  @Output() selectClickBook = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit(): void {
  }
  // nach dem Click auf das Bild wird der Eventtracker in der Parent-Componente (book-list) ausgelöst
  doClickSelect(book : IBook): void {
    this.selectClickBook.emit(book);
  }
}
