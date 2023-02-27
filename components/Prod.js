import Link from "next/link";
import FavouriteButton from "./FavouriteButton";

const Product = ({ name, price, permalink }) => {

    return (
      <>
        <div className="flex justify-between mt-3">
          <Link
            href={`/products/${permalink}`}
            className="hover:underline hover:font-bold cursor-pointer"
          >
            {name}
          </Link>
            <FavouriteButton className="cursor-pointer"/>
        </div>
        <p>{price.formatted_with_symbol}</p>
      </>
    );
}
 
export default Product;
