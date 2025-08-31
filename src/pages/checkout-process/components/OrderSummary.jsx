import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OrderSummary = ({ cartItems, deliveryFee, finalQuotation, isSticky = false }) => {
  const mockCartItems = cartItems || [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      price: 45000,
      quantity: 1,
      color: 'Natural Titanium'
    },
    {
      id: 2,
      name: 'AirPods Pro (2nd Gen)',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
      price: 12500,
      quantity: 1,
      color: 'White'
    }
  ];

  const subtotal = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = deliveryFee || 500;
  const bestPrice = finalQuotation?.bestPrice || subtotal;
  const savings = finalQuotation?.totalSavings || 0;
  const total = bestPrice + delivery;

  return (
    <div className={`bg-card rounded-lg border border-border p-6 ${isSticky ? 'sticky top-24' : ''}`}>
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Summary</h3>
      
      {/* Items */}
      <div className="space-y-4 mb-6">
        {mockCartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-card-foreground text-sm truncate">{item.name}</h4>
              <p className="text-xs text-muted-foreground">{item.color}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                <span className="font-medium text-sm font-mono">
                  LKR {item.price.toLocaleString()}.00
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({mockCartItems.length} items)</span>
          <span className="font-mono">LKR {subtotal.toLocaleString()}.00</span>
        </div>
        
        {savings > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Best Price Discount</span>
            <span className="font-mono text-success">-LKR {savings.toLocaleString()}.00</span>
          </div>
        )}
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span className="font-mono">
            {delivery === 0 ? 'Free' : `LKR ${delivery.toLocaleString()}.00`}
          </span>
        </div>
        
        {finalQuotation && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingDown" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Smart Pricing Active</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Best price from {finalQuotation.distributor}
            </p>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-border pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-card-foreground">Total</span>
          <span className="text-2xl font-bold text-primary font-mono">
            LKR {total.toLocaleString()}.00
          </span>
        </div>
        
        {savings > 0 && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">You save:</span>
            <span className="text-lg font-semibold text-success font-mono">
              LKR {savings.toLocaleString()}.00
            </span>
          </div>
        )}
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-2 mt-6 p-3 bg-muted rounded-lg">
        <Icon name="Shield" size={16} className="text-success" />
        <span className="text-sm text-muted-foreground">Secure 256-bit SSL encryption</span>
      </div>

      {/* Estimated Delivery */}
      <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-1">
          <Icon name="Truck" size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">Estimated Delivery</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;