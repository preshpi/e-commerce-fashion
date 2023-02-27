import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import ShopByCart from "../components/ShopbyCategories";
import Banner from "../components/Banner";
import ShopByBrand from "../components/ShopByBrand";
import Banner2 from "../components/Banner2";
import StyleGallery from "../components/styleGallery";
import TrendProduct from "../components/TrendProduct";
import Head from "next/head";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <>
      <Head>
        <title> FashionFlaire | Home</title>
        <meta name="keywords" content="FashionFlaire" />
      </Head>

      <h1>{merchant.business_name}</h1>
      <ShopByCart categories={categories} />
      <Banner />
      <ProductList products={products} />
      {/* <TrendProduct categories={categories} /> */}
      {/* <ShopByBrand /> */}
      {/* <Banner2 />
      <StyleGallery /> */}
    </>
  );
}
