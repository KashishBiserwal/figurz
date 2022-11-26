import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Layout from './Layout';
import Marvel from '../Marvel/Marvel'; 
import DC from '../DC/DC';
import Error from '../routes/Error';
import SingleProduct from '../routes/SingleProduct';
import Hero from './Hero';
import Mens from '../Men/Mens';
import Women from '../routes/Women';
import Kids from '../routes/Kids';
import Figures from '../routes/Figures';
import Cart from '../Cart/Cart';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marvel" element={<Marvel />}/>
          <Route path="dc" element={<DC />} />
          <Route path="Men" element={<Mens />} />
          <Route path='Women' element={<Women />} />
          <Route path='Kids' element={<Kids />} />
          <Route path='Figures' element={<Figures />} />
          <Route path=':productId' element={<SingleProduct />} />
          <Route path="undefined" element={<Error />} />
          <Route path="Hero/:hero" element={<Hero />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

