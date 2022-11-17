import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Layout from './Layout';
import Marvel from '../Marvel/Marvel'; 
import DC from '../DC/DC';
import Startrek from '../routes/Startrek';
import Error from '../routes/Error';
import SingleProduct from '../routes/SingleProduct';
import Hero from './Hero';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="marvel" element={<Marvel />}/>
          <Route path="dc" element={<DC />} />
          <Route path="startrek" element={<Startrek />} />
          <Route path=':productId' element={<SingleProduct />} />
          <Route path="undefined" element={<Error />} />
          <Route path="Hero/:hero" element={<Hero />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

