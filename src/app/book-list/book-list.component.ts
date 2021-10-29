import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books?: Book[];
  theTitle: string = '';
  theAuthor: string = '';
  thePublicationYear: number = 1;

  constructor(private book: BookService) { 
    this.books = this.book.getBooks();
  }

  ngOnInit(): void {
  }

  onDelete(book: Book){
    if(this.books != null)
    {
      let i = this.books.indexOf(book);
      this.books.splice(i, 1);
    }

  }

addBook(){
if(this.books != null){
  this.books.unshift({title: this.theTitle, author: this.theAuthor, publicationYear: this.thePublicationYear});
}
}


}
