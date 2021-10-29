import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {title: '', author: '', publicationYear: 1111};
  @Output() deleted: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

deleteBook(){
  this.deleted.emit(this.book);
}

}
