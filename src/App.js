import Header from './components/Header/Header.jsx';
import './index.css';
import {Route, Routes, useNavigate} from "react-router-dom"
import Main from './pages/Main.jsx';
import BookPage from './pages/BookPage.jsx';




 function App() {
  const navigat = useNavigate()
  return (
    <div class="wrapper">
     <Header/>
     {/* <button onClick ={() =>{navigat("/books/1")}} >шантарам</button> */}
     <Routes>
      <Route path= "/" element={<Main/>}></Route>
      <Route path= "/books/:id" element={<BookPage/>}></Route>
     </Routes>
      {/* <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">Все книнги</h2>
          <div class="content__items">
           <Books title="Девушка из Бруклина" prise="33 BYN"/>
           <Books title="Убить пересмешника" prise="29 BYN"/>
           <Books/>
           <Books/>
           </div>
          </div>
          </div> */}
        </div>
        
  );
}


export default App;
