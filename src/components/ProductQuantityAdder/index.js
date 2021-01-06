import React, { useContext, useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ProductQuantityAdderWrapper } from './styles';
import CartContext from '../../context/CartContext';

export function ProductQuantityAdder({ variantId, available }) {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(variantId, quantity);
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
