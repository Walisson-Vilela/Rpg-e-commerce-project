import CartWidget from "./CartWidget";
import BrazilFlagImg from "../../images/brazilFlag.png";
import UKFlagImg from "../../images/ukFlag.png";

const Header = () => {
  return (
    <nav className="col-span-3 text-3xl">
      <div className="max-h-20 border-4 border-white rounded-md w-full flex justify-between items-center p-5 bg-gradient-to-t from-blue-950/60 to-blue-300/40 shadow-md">
        <div className="min-w-4/12 flex flex-row items-center">
          <div className="mx-2">
            <img
              src={BrazilFlagImg}
              className="w-8 cursor-pointer "
              alt="Brazil flag Icon"
            />
          </div>
          <div className=" mx-2 mr-8">
            <img
              src={UKFlagImg}
              className="w-8 cursor-pointer"
              alt="UK Flag Icon"
            />
          </div>
          <span className="">R$9000</span>
        </div>
        <ul className="flex flex-row items-center">
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Armas</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Poções</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Livros</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Cancelar</li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export { Header };
