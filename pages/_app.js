import Layout from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <div className="w-[80%] mx-auto">
        <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
};

export default App;
