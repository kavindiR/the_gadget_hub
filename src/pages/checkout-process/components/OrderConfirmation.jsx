import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const OrderConfirmation = ({ orderData, onNewOrder }) => {
  const orderId = `GH${Date.now().toString().slice(-8)}`;
  const trackingNumber = `TRK${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card rounded-lg border border-border p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Check" size={32} color="white" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-card-foreground mb-2">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* Order Details */}
        <div className="bg-muted rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Order ID:</span>
                <span className="font-mono font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Tracking Number:</span>
                <span className="font-mono font-medium">{trackingNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Order Date:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-medium capitalize">{orderData?.paymentMethod || 'Card'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Total Amount:</span>
                <span className="font-mono font-bold text-primary">
                  LKR {((orderData?.finalQuotation?.bestPrice || 45000) + 500).toLocaleString()}.00
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">You Saved:</span>
                <span className="font-mono font-bold text-success">
                  LKR {(orderData?.finalQuotation?.totalSavings || 2200).toLocaleString()}.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 text-left">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Truck" size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-card-foreground">Delivery Information</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Delivery:</span>
              <span className="font-medium">
                {estimatedDelivery.toLocaleDateString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Address:</span>
              <div className="text-right">
                <div className="font-medium">
                  {orderData?.firstName} {orderData?.lastName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {orderData?.address}<br />
                  {orderData?.city}, {orderData?.postalCode}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">What happens next?</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground">Order Processing</h4>
                <p className="text-sm text-muted-foreground">
                  We'll prepare your order and coordinate with our distributor partner.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-white">2</span>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground">Shipping Notification</h4>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email with tracking details once your order ships.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-white">3</span>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Your order will be delivered to your specified address.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/my-orders">
            <Button variant="default" iconName="Package" iconPosition="left" fullWidth>
              Track Your Order
            </Button>
          </Link>
          <Link to="/shop-page">
            <Button variant="outline" iconName="ShoppingBag" iconPosition="left" fullWidth>
              Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Contact Support */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Need help with your order?
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <a href="tel:+94112345678" className="flex items-center space-x-1 text-primary hover:underline">
              <Icon name="Phone" size={14} />
              <span>+94 11 234 5678</span>
            </a>
            <a href="mailto:support@gadgethub.lk" className="flex items-center space-x-1 text-primary hover:underline">
              <Icon name="Mail" size={14} />
              <span>support@gadgethub.lk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;