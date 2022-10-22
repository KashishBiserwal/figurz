import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import SharedProductLayout from './pages/SharedProductLayout';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}



