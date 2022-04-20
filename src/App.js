import { useSelector } from 'react-redux';

//pages
import Cart from './components/Cart/Cart';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';

function App() {

  const modalCart = useSelector(state => state.modalCart.modalCart);

  return (
    <div className="App">
     <Navbar/>
     <Hero />
     <Meals />
     {modalCart && <Cart />}
    </div>
  );
}

export default App;
