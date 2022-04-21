import { useSelector } from 'react-redux';

//pages
import Cart from './components/Cart/Cart';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import ModalNotif from './components/UI/ModalNotif';

function App() {

  const modalCart = useSelector(state => state.modalCart.modalCart);
  const modalNotif = useSelector(state => state.modalNotif.modalNotif);

  return (
    <div className="App">
     <Navbar/>
     <Hero />
     <Meals />
     {modalCart && <Cart />}
     <ModalNotif message={modalNotif.message}/>
    </div>
  );
}

export default App;
