import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OrderSummary = ({ 
  subtotal, 
  deliveryFee, 
  discount, 
  total, 
  onApplyPromoCode, 
  onCheckout,
  isCheckingOut 
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }

    setIsApplyingPromo(true);
    setPromoError('');
    setPromoSuccess('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock promo code validation
      const validCodes = ['SAVE10', 'WELCOME20', 'GADGET15'];
      if (validCodes.includes(promoCode.toUpperCase())) {
        const discountAmount = promoCode.toUpperCase() === 'WELCOME20' ? subtotal * 0.2 : 
                              promoCode.toUpperCase() === 'GADGET15' ? subtotal * 0.15 : 
                              subtotal * 0.1;
        
        await onApplyPromoCode(promoCode.toUpperCase(), discountAmount);
        setPromoSuccess(`Promo code applied! You saved ${formatPrice(discountAmount)}`);
        setPromoCode('');
      } else {
        setPromoError('Invalid promo code. Please try again.');
      }
    } catch (error) {
      setPromoError('Failed to apply promo code. Please try again.');
    } finally {
      setIsApplyingPromo(false);
    }
  };

  const handleCheckout = async () => {
    await onCheckout();
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft sticky top-24">
      <h2 className="text-xl font-bold text-card-foreground mb-6">Order Summary</h2>
      
      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-mono font-medium">{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span className="font-mono font-medium">
            {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
          </span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between items-center text-success">
            <span>Discount Applied</span>
            <span className="font-mono font-medium">-{formatPrice(discount)}</span>
          </div>
        )}
        
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-card-foreground">Total</span>
            <span className="text-xl font-bold text-primary font-mono">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromoError('');
                setPromoSuccess('');
              }}
              disabled={isApplyingPromo}
              error={promoError}
              className="text-sm"
            />
          </div>
          <Button
            variant="outline"
            onClick={handleApplyPromo}
            disabled={isApplyingPromo || !promoCode.trim()}
            loading={isApplyingPromo}
            className="px-4"
          >
            Apply
          </Button>
        </div>
        
        {promoSuccess && (
          <div className="mt-2 flex items-center space-x-2 text-success text-sm">
            <Icon name="CheckCircle" size={16} />
            <span>{promoSuccess}</span>
          </div>
        )}
      </div>

      {/* Available Promo Codes */}
      <div className="mb-6 p-4 bg-muted rounded-lg">
        <h3 className="font-medium text-card-foreground mb-2 text-sm">Available Offers</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">SAVE10</span>
            <span className="text-success font-medium">10% off</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">WELCOME20</span>
            <span className="text-success font-medium">20% off</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">GADGET15</span>
            <span className="text-success font-medium">15% off</span>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="mb-6 p-4 bg-muted rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Truck" size={16} className="text-primary" />
          <span className="font-medium text-card-foreground text-sm">Delivery Info</span>
        </div>
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>• Free delivery on orders over Rs. 50,000</p>
          <p>• Standard delivery: 2-3 business days</p>
          <p>• Express delivery available at checkout</p>
        </div>
      </div>

      {/* Security Badge */}
      <div className="mb-6 flex items-center justify-center space-x-2 text-xs text-muted-foreground">
        <Icon name="Shield" size={16} className="text-success" />
        <span>Secure checkout with SSL encryption</span>
      </div>

      {/* Checkout Button */}
      <Button
        variant="default"
        size="lg"
        fullWidth
        onClick={handleCheckout}
        loading={isCheckingOut}
        iconName="ArrowRight"
        iconPosition="right"
        className="font-semibold"
      >
        Proceed to Checkout
      </Button>

      {/* Payment Methods */}
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground mb-2">We accept</p>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
            <Icon name="CreditCard" size={12} />
          </div>
          <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
            <Icon name="Smartphone" size={12} />
          </div>
          <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
            <Icon name="Banknote" size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;