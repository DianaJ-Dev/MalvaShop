import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { TipeOfItems } from './components/TypeOfItems';
import { Navbar } from './components/Navbar';
import { Carrusel } from './components/Carrusel';
import { Footer } from './components/Footer';
import { DetailCarrito } from './components/DetailCarrito';
import {Section} from './components/Section'


function App() {
  const [onClickCarrito, setOnClickCarrito] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [filterValue, setFilterValue] = useState('All')
  const [inputValue, setInputValue] = useState(null)
  

  const handleCarritoClick = (value) => {
    value ? setOnClickCarrito(true) : setOnClickCarrito(false);
  }

  const handleVaciarCarrito = () => {
    setCartItems([]);
  }

  const addItemToCar = (item) => {
    setCartItems([...cartItems, item]);
  }

  const handleClickFilter = (tipo) => {
    setFilterValue(tipo)
  }

  const searchInput = (value) => {
    setInputValue(value)
  }


  return (
    <BrowserRouter>
      <>
        <Navbar onClickCarrito={handleCarritoClick} onInputChange={searchInput}/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section onClickFilter={handleClickFilter} />
                <Carrusel />
                <TipeOfItems onClickAddItem={addItemToCar} filterValue={filterValue} inputValue={inputValue}  />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> 
        </Routes>
        <Footer />
        {onClickCarrito && <DetailCarrito onClose={handleCarritoClick} carItems={cartItems} onVaciarCarrito={handleVaciarCarrito}/>}
      </>
    </BrowserRouter>
  );
}

export default App;