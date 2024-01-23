import { FormEvent, useState } from "react";
import { Product } from "../store/orders/slice";

export const useForm = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() !== '') {
      setProducts([...products, { name, quantity }]);
      setName('');
      setQuantity(1);
    }
  };

  return {
    products,
    name,
    quantity,
    setProducts,
    setName,
    setQuantity,
    handleProduct,
  };
};