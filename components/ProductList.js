import Link from "next/link";
import Product from "./Prod";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import TrendProduct from './TrendProduct';
export default function ProductList({ products }) {
  if (!products) return null;
  console.log(products);

  return (
    <div  className="w-[95%] mx-auto  mt-[7%]">
      <h3 className="text-[28px] font-bold mb-3">#NewSale</h3>
        <Carousel
          dots={false}
          draggable
          swipeable
          arrows={true}
          partialVisible={true}
          infinite
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {products.map((product) => (
            <div
              key={product.permalink}
              className="flex justify-center items-center p-5 h-64 border"
            >
              {/* <Image src={product.Image.filename} alt="product-image"/> */}

              <Link href={`/products/${product.permalink}`}>
                <div className="w-full h-full">
                  <Product {...product} />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      <TrendProduct/>
    </div>

  );
}
