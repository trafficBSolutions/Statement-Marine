import { Home, About, Designs, BoatsAvailable, Contact, Open350, Open380, Cat360, Tigress430, Ultimate42, Passion50 } from './pages/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/designs/350-open" element={<Open350 />} />
      <Route path="/designs/380-open" element={<Open380 />} />
      <Route path="/designs/360-cat" element={<Cat360 />} />
      <Route path="/designs/430-tigress" element={<Tigress430 />} />
      <Route path="/designs/42-ultimate" element={<Ultimate42 />} />
      <Route path="/designs/50-passion" element={<Passion50 />} />
      <Route path="/boats-available" element={<BoatsAvailable />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
