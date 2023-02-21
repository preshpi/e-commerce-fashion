import Layout from "../components/Layout";
import { CartProvider } from "./context/cart";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <div className="">
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </div>
      </Layout>
    </div>
  );
};

export default App;
