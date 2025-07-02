import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import CartItem from './UI/CartItem';
import Button from "./UI/Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleClose() {
    userProgressCtx.hideCart();
  }

  
     function handleGoToCheckout(){
    
      
      userProgressCtx.showCheckOut();
     }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onclose={userProgressCtx.progress === 'cart' ? handleClose:null}
    
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => cartCtx.addItem({ ...item, quantity: 1 })}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>

      <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}> Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
