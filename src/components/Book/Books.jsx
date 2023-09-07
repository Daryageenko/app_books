import React from 'react'
import {useNavigate} from "react-router-dom"

function Book (props) {
  console.log (props)
  const navigat = useNavigate()
    return (

<div class="book-block">
  <img
    class="book-block__image"
    src={props.image}
    onClick ={() =>{navigat(`/books/${props.isbn13}`)}}
    width="250px"
    alt="Book"
  />
  <h4 class="book-block__title">{props.title}</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">{props.price}</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

/* <div class="book-block">
  <img
    class="book-block__image"
    src='./img/Пересмешник.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Убить пересмешника</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">29 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/Воржи.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Над пропастью во ржи</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">от 17 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/Вино.jpg'
    width="400px"
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Вино из одуванчиков</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">25 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/Шантарам.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Шантарам</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">35 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/13карта.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Тринадцатая карта</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">30 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/бегущиезаветром.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Бегущие за ветром</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">25 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/грозовой.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">Грозовой перевал</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">27 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div> 

<div class="book-block">
  <img
    class="book-block__image"
    src='./img/омышахилюдях.jpg'
    height="400px"
    alt="Book"
  />
  <h4 class="book-block__title">О мышах и людях</h4>
  <div class="book-block__selector">
  </div>
  <div class="book-block__bottom">
    <div class="book-block__price">30 BYN</div>
    <div class="button button--outline button--add">
      <span>Добавить</span>
      <i>+1</i>
    </div>
  </div>
</div>  */



    )
}

export default Book;