import { useEffect, useState } from "react";
import Button from "../../components/Button";

const PurchaseSummary = () => {
  const [count, setCount] = useState<number>(1);
  const [value, setValue] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);

  const product = 50;

  const handleClick = (operation: string) => {
    if (operation === "add") {
      setCount((prevCount) => prevCount + 1); 
    } else if (operation === "subtract") {
      setCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrementa o count, sem permitir valores negativos
    }
  };

  useEffect(() => {
    setValue(product * count); // Atualiza o value multiplicando o valor base pelo count
  }, [count]);

  return (
    <section className="col-span-2 min-h-4 border-4 h-36 border-white rounded-md flex flex-col justify-between items-left p-5 bg-gradient-to-t from-blue-950/60 to-blue-300/40 shadow-md">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ">
          <div className="mr-4">Quantidade: </div>
          <Button
            disabled={false}
            onClick={() => handleClick("subtract")}
            name="-"
          />
          <span className="mx-4">{count}</span>
          <Button
            disabled={count >= stock}
            onClick={() => handleClick("add")}
            name="+"
          />
          <span className="mx-4">R${value}</span>
        </div>
        <span>Estoque: {stock}</span>
        <Button
          disabled={false}
          onClick={() => handleClick("add")}
          name="Adicionar ao baú"
        />
      </div>
      <span>Inventário: 0</span>
    </section>
  );
};

export default PurchaseSummary;
