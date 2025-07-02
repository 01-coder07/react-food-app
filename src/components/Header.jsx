import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartctx  =useContext(CartContext);
  const userProgressCtx =useContext(UserProgressContext);

  
  const totalCartItems = cartctx.items.reduce((totalNumberOfItems,item)=>{
    return totalNumberOfItems + item.quantity;
  },0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Restaurant" />
        <h1>Food AnyTime</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}> My Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
