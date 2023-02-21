import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import ShopByCart from "../components/ShopbyCategories";
import Banner from "../components/Banner";
import ShopByBrand from "../components/ShopByBrand";
import Banner2 from "../components/Banner2";
import StyleGallery from "../components/styleGallery";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products
    }
  }
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <>
      <h1>{merchant.business_name}</h1>
      <ShopByCart categories={categories} />
      <Banner/>
      <ProductList products={products} />
      <ShopByBrand/>
      <Banner2/>
      <StyleGallery/>
    </>
  );
}
