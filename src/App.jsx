import Products from "./Views/products/Products";
import Header from "./components/common/header/Header";
import Sidenav from "./components/common/sidenav/Sidenav";

function App() {
  return (
    <section className="main">
      <Sidenav />
      <section className="w-full">
        <Header />
        <Products />
      </section>
    </section>
  );
}

export default App;
