import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './BookShelf'

class BookList extends Component {
    render() {
        const { bookselves, books, onMove } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookselves.map(shelf => (
                            <Bookshelf key={shelf.key} shelf={shelf} books={books} onMove={onMove} />
                        ))}
                    </div>

                    <div className="open-search">
                        <Link to="/search">
                            <button>Add a book</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList