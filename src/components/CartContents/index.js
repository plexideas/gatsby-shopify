import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import CartContext from '../../context/CartContext';
import { Button } from '../Button';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { CartItem, CartHeader, CartFooter, Footer } from './styles';

export function CartContents() {
  const { checkout, updateLineItem } = useContext(CartContext);
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  return (
    <section>
      <h1>Your cart</h1>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Title</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total price</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.variant.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>
              {lineItem.variant.title === 'Default Title'
                ? ''
                : lineItem.variant.title}
            </div>
          </div>
          <div>£{lineItem.variant.price}</div>
          <div>
            <QuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
          </div>
          <div>£{(lineItem.quantity * lineItem.variant.price).toFixed(2)}</div>
          <div>
            <RemoveLineItem lineItemId={lineItem.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>£{checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && <h4>Your cart is empty.</h4>}
      <Footer>
        <div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Continue shopping
          </Button>
        </div>
        {!!checkout?.webUrl && (
          <div>
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </Footer>
    </section>
  );
}
