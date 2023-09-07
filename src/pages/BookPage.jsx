import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"


function BookPage (){
    const {id} = useParams()
    const [book, setBook] = useState ({})

    useEffect (()=> {
        fetch (`https://api.itbook.store/1.0/books/${id}`)
        .then(response => response.json())
      .then(json => setBook(json))
    },[id]) 






    return (
        <div class="book-page">
        <img
          class="book-block__image"
          src={book.image}
          alt="Book"
        />
        <h4 class="book-block__title">{book.title}</h4>
        <div class="book-block__bottom">
          <div class="book-block__price">{book.price}</div>
          <div class="button button--outline button--add">
            <span>Добавить</span>
            <i>+1</i>
          </div>
        </div>
      </div> 
        );
  }

  export default BookPage;