import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import {Footer} from "./components/Layout/Footer";
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import {MealsContainer} from "./components/Meals/MealsContainer";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

  return (
      <div>
          <CartProvider>
              <Header onShowCart={showCartHandler} />
              <Routes>
                  <Route path="/" element={<MealsContainer onClose={hideCartHandler}/>} />
                  <Route path="/about" element={<About onClose={hideCartHandler} />} />
              </Routes>
              {cartIsShown && <Cart onClose={hideCartHandler} />}
              <Footer />
          </CartProvider>

      </div>
  );
}

export default App;
