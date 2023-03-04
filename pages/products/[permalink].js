import FavouriteButton from "../../components/FavouriteButton";
import commerce from "../../lib/commerce";
import Head from "next/head";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import {AiOutlineSafety} from "react-icons/ai";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  console.log(product);

  return (
    <>
      <Head>
        <title> FashionFlaire | Products</title>
        <meta name="keywords" content="FashionFlaire" />
      </Head>
      <div className="w-[80%] mx-auto mb-3">
        <span>
          <Link href="/">Home /</Link>
        </span>
        <span>
          <Link href="/products"> Products /</Link>
        </span>
        <span className="font-[900]"> {product.name}</span>
      </div>
      <div className="flex justify-center gap-[30px]">
        <div>
          <img
            src={product.image.url}
            alt={product.name}
            title={product.name}
            className="w-[500px] h-[600px] object-cover"
          />
        </div>
        <div className="pt-5">
          <p className="font-bold">{product.name}</p>
          <p className="mt-4">{product.price.formatted_with_symbol}</p>

          <ul className="list-disc px-3 mt-5">
            <li>Lorem ipsum dolor sit</li>
            <li>Phasellus finibus</li>
            <li>Curabitur tincidunt</li>
          </ul>

          <p className="font-bold mt-6">Size (US)</p>
          <div className="flex gap-5 mt-2">
            <button className="uppercase text-black px-3 py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
              xs(2)
            </button>
            <button className="uppercase text-black px-3 py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
              s(4)
            </button>
            <button className="uppercase text-black px-3 py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
              m(6)
            </button>
            <button className="uppercase text-black px-3 py-2 text-sm border-black hover:bg-black hover:text-white transistion-colors duration-300 border rounded-full">
              l(8/10)
            </button>
          </div>

          <p className="font-bold mt-6">Colors</p>
          <div className="flex gap-5 mt-2">
            <button
              className="w-8 h-8 bg-[pink] rounded-full"
              title="pink"
            ></button>
            <button
              className="w-8 h-8 bg-[black] rounded-full"
              title="black"
            ></button>
            <button
              className="w-8 h-8 bg-[grey] rounded-full"
              title="grey"
            ></button>
            <button
              className="w-8 h-8 bg-[blue] rounded-full"
              title="blue"
            ></button>
          </div>

          <div className="flex space-x-6 mt-6">
            <button
              onClick={addToCart}
              className="px-10 py-3 bg-black text-white font-bold uppercase hover:opacity-70 transition-all duration-300"
            >
              <Link href="/cart">ADD TO CART</Link>
            </button>
            <div className="rounded-[50px] border border-gray px-3 py-3 cursor-pointer">
              <FavouriteButton className="text-5xl" />
            </div>
          </div>

          <div className="mt-3">
            <p>Delivery</p>
            <div className="flex gap-2">
              <div className="flex items-center justify-center">
                <TbTruckDelivery />
              </div>
              <p className="font-bold">Free Shiping</p>
            </div>
            <p className="text-sm text-gray">Note: This will take 21 days</p>

            <div className="flex gap-2 mt-3">
              <div className="flex items-center justify-center">
                <TbTruckDelivery />
              </div>
              <p className="font-bold">Standard Shiping</p>
            </div>
            <p className="text-sm text-gray">Note: This will take 7 days</p>

            <div className="flex gap-2 mt-3">
              <span><AiOutlineSafety/></span>
              <span className="text-sm">You get refunded if item arrives late or not described as seen.</span>
            </div>
          </div>
        </div>
      </div>

      <h5 className="font-bold text-3xl p-5 mt-6">Related Products</h5>
      <div className="grid-cols-4 grid gap-[20px] w-[80%] mx-auto">
        {product.related_products.map(
          ({ id, image, name, price, permalink }) => (
            <div key={id}>
              <Link href={`/products/${permalink}`}>
                <img
                  src={image.url}
                  alt={name}
                  className="w-[300px] h-[300px] object-cover hover:opacity-75 transition-opacity duration-300"
                />
              </Link>
              <p className="text-xl">{name}</p>
              <p className="font-[800]">{price.formatted_with_symbol}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
