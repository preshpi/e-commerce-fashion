import Product from "./Prod";
import { useState } from "react";
import { useCartDispatch } from "../pages/context/cart";
import commerce from "../lib/commerce";
import toast, { Toaster } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  console.log(product);
  
  const { setCart } = useCartDispatch()
  const addToCart = () => commerce.cart.add(product.id).then(({cart}) => setCart(cart))
  const [showCart, setShowCart] = useState(false);
  const handleMouseEnter = () => setShowCart(true);
  const handleMouseLeave = () => setShowCart(false);
  const notify = () => toast('Added to cart!');


  const handleCart = () => {
    notify()
    addToCart()
  }

  
  return (
    <div
      className="grid justify-center items-center h-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        
        <img src={product.image.url} alt="clothes" className="w-[300px] h-[300px] object-cover" />
        {showCart && (
          <div className="absolute bottom-10 w-full">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded text-center mx-auto w-[70%] justify-center items-center flex"
              onClick={handleCart}
            >
              Add To Cart
            </button>
            <Toaster />
          </div>
        )}
      </div>
        <Product {...product} />
    </div>
  );
};

const ProductList = ({ products }) => {
  if (!products) return null;

  return (
    <div className="w-[95%] mx-auto mt-[4%]">
      <h3 className="text-[28px] font-bold mb-3 text-center">#NewSale</h3>
      <div className="grid-cols-5 grid gap-[20px]">
      {products.map((product) => (
        <ProductCard key={product.permalink} product={product} />
      ))}        
      </div>

    </div>
  );
};

export default ProductList;
