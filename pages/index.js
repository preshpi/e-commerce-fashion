import commerce from "../lib/commerce";
import Banner from "../components/Banner";
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
      {/* <ShopByCart categories={categories} /> */}
      <Banner />
      {/* <ProductList products={products} /> */}
    </>
  );
}
