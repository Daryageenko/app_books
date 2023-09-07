import React from "react";

function Sort (){
    return (
        <div class="sort">
        <div class="sort__label">
          <b>Сортировка по:</b>
          <span>популярности</span>
        </div>
        <div class="sort__popup">
          <ul>
            <li class="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      </div>
    );
  }
  export default Sort;