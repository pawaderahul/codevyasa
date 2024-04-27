import Products from "./Views/products/Products";
import Header from "./components/common/header/Header";
import Sidenav from "./components/common/sidenav/Sidenav";

function App() {
  return (
    <section className="root-conatiner">
      <Sidenav />
      <section className="main">
        <Header />
        <Products />
      </section>
    </section>
  );
}

export default App;
