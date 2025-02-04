import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import CarritoContainer from './components/CarritoContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:catId" element={<ItemListContainer/>} />
        <Route exact path="/carr" element={<CarritoContainer/>} />
        <Route exact path='/product/:id' element ={<ItemList/>} />
        <Route path='*' element ={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
