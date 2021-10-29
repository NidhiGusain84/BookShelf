import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

	books: Book[] = [
	{title: 'TheThree-Body Problem', author: 'Lui Cixin', publicationYear: 2008},
	{title: 'How the Light Gets In', author: 'Louise Penny', publicationYear: 2013},
	{title: 'Confessions', author: 'Kanae Minato', publicationYear: 2008}
	];


  	constructor() { }

	getBooks(): Book[] {
		return this.books;
	}



}
