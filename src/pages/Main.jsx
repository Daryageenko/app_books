import React, { useEffect, useState } from 'react'
import Categories from '../components/Book/Categories.jsx';
import Sort from '../components/Book/Sort.jsx'
import Books from '../components/Book/Books.jsx';

   

function Main (){

    const [books, setBooks] = useState ([])
    
    useEffect (()=> {
        fetch ("https://api.itbook.store/1.0/search/ab")
        .then(response => response.json())
      .then(json => setBooks(json?.books))
    },[]) 
console.log(books)









    return (
        <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">Все книнги</h2>
          <div class="content__items">
           {books.map((item)=>(<Books {...item}></Books>))} 
           </div>
          </div>
          </div>
        
    );
  }

  export default Main;