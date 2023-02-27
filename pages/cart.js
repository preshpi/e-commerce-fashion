import { useCartDispatch, useCartState } from "./context/cart";

import commerce from "../lib/commerce";

function CartItem({ id, name, quantity, line_total }) {
  const { setCart } = useCartDispatch();
  const handleUpdateCart = ({ cart }) => setCart(cart);  
  console.log(handleUpdateCart);
  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);
  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <div>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{line_total.formatted_with_symbol}</p>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={removeItem}>&times;</button>
    </div>
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="w-[80%] mx-auto flex items-center justify-center">
      <div className="w-[500px]">
      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <p>
        <strong>Sub total:</strong> {subtotal.formatted_with_symbol}
      </p>        
      </div>

      <div className="w-[500px] bg-[red] h-96">

      </div>

    </div>
  );
}