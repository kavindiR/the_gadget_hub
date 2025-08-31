import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartSummaryMobile = ({ 
  subtotal, 
  deliveryFee, 
  discount, 
  total, 
  itemCount,
  onCheckout,
  isCheckingOut 
}) => {
  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-soft-lg z-40">
      <div className="p-4">
        {/* Summary Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="ShoppingCart" size={16} className="text-primary" />
            <span className="text-sm font-medium text-card-foreground">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary font-mono">
              {formatPrice(total)}
            </div>
            {discount > 0 && (
              <div className="text-xs text-success">
                Saved {formatPrice(discount)}
              </div>
            )}
          </div>
        </div>

        {/* Quick Summary */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>Subtotal: {formatPrice(subtotal)}</span>
          <span>
            Delivery: {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
          </span>
        </div>

        {/* Checkout Button */}
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={onCheckout}
          loading={isCheckingOut}
          iconName="ArrowRight"
          iconPosition="right"
          className="font-semibold"
        >
          Proceed to Checkout
        </Button>

        {/* Delivery Info */}
        <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-muted-foreground">
          <Icon name="Truck" size={12} className="text-primary" />
          <span>Free delivery on orders over Rs. 50,000</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryMobile;