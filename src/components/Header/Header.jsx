import React from 'react'


function Header (){
    return (
    <div class="header">
          <div class="container">
            <div class="header__logo">
              <img width="100" src="./img/Frame 862.jpg" alt="logo" />
              <div>
                <h1>Dari books</h1>
                <p>Книги, которые читает весь мир</p>
              </div>
              <div class="search"></div>
            </div>
            <div class="header__cart">
              <a href="" class="button button--cart">
                <span>0 BYN</span>
                <div class="button__delimiter"></div>
                <span>0</span>
              </a>
            </div>
          </div>
        </div> );
  }

  export default Header;