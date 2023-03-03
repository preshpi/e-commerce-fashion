import Product from "./Prod";
import { useState, useEffect } from "react";
import { useCartDispatch } from "../pages/context/cart";
import commerce from "../lib/commerce";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product }) => {
  const { setCart } = useCartDispatch();
  const addToCart = () =>
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));
  const [showCart, setShowCart] = useState(false);
  const handleMouseEnter = () => setShowCart(true);
  const handleMouseLeave = () => setShowCart(false);
  const notify = () => toast("Added to cart!");

  const handleCart = () => {
    notify();
    addToCart();
  };

  return (
    <div
      className="grid justify-center items-center h-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          src={product.image.url}
          alt="clothes"
          className="w-[300px] h-[300px] object-cover"
        />
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
  const [loading, setLoading] = useState(true); // Define state variable
  const displayedProducts = products.slice(0, 10); // Display only the first 15 products

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <div className="w-[95%] mx-auto mt-[4%]">
        <h3 className="text-[28px] font-bold mb-3 text-center">#NewSale</h3>
        {loading && (
          <div className="lg:grid-cols-5 grid gap-5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((items) => (
              <div className="flex-1" key={items}>
                <Skeleton className="w-[300px] h-[300px] rounded-lg" />
                <Skeleton className="w-8 h-5 rounded-lg" />
                <Skeleton className="w-8 h-5 rounded-lg" />
              </div>
            ))}
          </div>
        )}
        <div className="lg:grid-cols-5 md:grid-cols-3 grid gap-[20px]">
          {displayedProducts.map((product) => (
            <ProductCard key={product.permalink} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
