import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../shared/Ibook';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book?: IBook;
  @Output() leaveEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  doLeave() {
    this.leaveEmitter.emit();
  }
}
