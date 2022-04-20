import { useState } from 'react';

//pages
import Cart from './components/Cart/Cart';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [isShowModalCart, setIsShowModalCart] = useState(false) ;

  const showModalCartHandler = () => {
    setIsShowModalCart(prevState => {
      if(prevState) {
        return false;
      } else {
        return true;
      }
    });
  }

  return (
    <div className="App">
     <Navbar onShowModalCart={showModalCartHandler}/>
     <Hero />
     <Meals />
     {isShowModalCart && <Cart onShowModalCart={showModalCartHandler}/>}
    </div>
  );
}

export default App;
