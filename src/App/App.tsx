import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";
import ProductDescription from "./Section/ProductDescription";
import PurchaseSummary from "./Section/PurchaseSummary";
import PersonaImg from "../images/persona.png";

function App() {
  return (
    <div className="w-screen p-2 h-screen">
      <div className="grid grid-cols-3 gap-4 relative">
        <Header />
        <ProductDescription />
        <div
          className=" col-span-1 "
          style={{ backgroundImage: `url(${PersonaImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover' }}
        >
        </div>
        <div className="grid col-span-2 gap-4 h-full z-10 relative">
          <ItemListContainer />
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
