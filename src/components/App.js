import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Layout from './Layout';
import Marvel from '../Marvel/Marvel';
import DC from '../routes/DC';
import Anime from '../routes/Anime';
import Startrek from '../routes/Startrek';
import Error from '../routes/Error';
import SingleProduct from '../routes/SingleProduct';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="marvel" element={<Marvel />}></Route>
          <Route path="dc" element={<DC />} />
          <Route path="anime" element={<Anime />} />
          <Route path="startrek" element={<Startrek />} />
          <Route path=':productId' element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
          <Route path="undefined" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

