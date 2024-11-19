import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
export default function Home() {
  return (
      <main>
        <h1>HIBISCUS MARKET🌺</h1>
        <div>
          <section>
            <ProductForm />
          </section>
          <section>
            <ProductList/>
          </section>
        </div>
      </main>
  );
}
