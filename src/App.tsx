import Card from "./components/Card";
import ProductImage from "./assets/images/image-product-desktop.jpg";
import React from "react";

function App() {
  return (
    <div className="App p-4 md:p-0 h-screen w-full bg-primary-cream flex items-center justify-center">
      <div className="flex flex-col w-full h-full rounded-md md:flex-row md:w-3/4 md:h-[30rem] lg:w-3/4 xl:w-2/4 border-separate overflow-hidden">
        <Card
          image={ProductImage}
          category="PERFUME"
          title="Gabrielle Essence Eau De Parfum"
          description="A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL."
          price={149.99}
          discount={169.99}
        />
      </div>
    </div>
  );
}

export default App;
