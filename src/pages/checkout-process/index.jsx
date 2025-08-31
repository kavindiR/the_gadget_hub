import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import PageHeader from '../../components/ui/PageHeader';
import ProgressIndicator from './components/ProgressIndicator';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import OrderSummary from './components/OrderSummary';
import OrderConfirmation from './components/OrderConfirmation';
import { useAuth } from '../../context/AuthContext';
import { useOrders } from '../../context/OrderContext';
import Icon from '../../components/AppIcon';

const CheckoutProcess = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { createOrder } = useOrders();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    shipping: {},
    payment: {}
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const steps = [
    { id: 'shipping', label: 'Shipping' },
    { id: 'payment', label: 'Payment' },
    { id: 'confirmation', label: 'Confirmation' }
  ];

  // Check if user has items in cart (mock check)
  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (!cartItems || JSON.parse(cartItems).length === 0) {
      // Redirect to cart if no items
      navigate('/shopping-cart');
    }
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate('/login-page');
    }
  }, [navigate, isAuthenticated]);

  const handleFormChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
    setErrors({});
  };

  const handleNext = async (data) => {
    if (currentStep === 0) {
      // Shipping to Payment
      setFormData(prev => ({ ...prev, shipping: data }));
      setCurrentStep(1);
    } else if (currentStep === 1) {
      // Payment to Confirmation
      setIsProcessing(true);
      
      try {
        // Get cart items
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        // Create order
        const orderData = {
          items: cartItems,
          total: 45500, // Mock total
          shippingAddress: formData.shipping,
          paymentMethod: data.paymentMethod || 'credit_card',
          deliveryOption: formData.shipping.deliveryOption || 'delivery',
          deliveryFee: formData.shipping.deliveryOption === 'pickup' ? 0 : 500
        };
        
        const newOrder = await createOrder(orderData);
        
        setFormData(prev => ({ ...prev, payment: data }));
        setOrderData({ ...formData.shipping, ...data, orderId: newOrder.id });
        setCurrentStep(2);
        
        // Clear cart after successful order
        localStorage.removeItem('cartItems');
        localStorage.setItem('cartItemCount', '0');
      } catch (error) {
        console.error('Failed to create order:', error);
        setErrors({ general: 'Failed to create order. Please try again.' });
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNewOrder = () => {
    setCurrentStep(0);
    setFormData({ shipping: {}, payment: {} });
    setOrderData(null);
    navigate('/shop-page');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <PageHeader
        title="Checkout"
        subtitle="Complete your purchase securely"
        backButtonText="Back to Cart"
      />

      {/* Progress Indicator */}
      <div className="pt-16">
        <ProgressIndicator currentStep={currentStep} steps={steps} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentStep < 2 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Form Area */}
            <div className="lg:col-span-8">

              {/* Step Content */}
              {currentStep === 0 && (
                <ShippingForm
                  formData={formData.shipping}
                  onFormChange={handleFormChange}
                  onNext={handleNext}
                  errors={errors}
                />
              )}

              {currentStep === 1 && (
                <PaymentForm
                  formData={formData.payment}
                  onFormChange={handleFormChange}
                  onNext={handleNext}
                  onBack={handleBack}
                  isProcessing={isProcessing}
                />
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <OrderSummary
                cartItems={null}
                deliveryFee={formData.shipping.deliveryOption === 'pickup' ? 0 : 500}
                finalQuotation={formData.payment.finalQuotation}
                isSticky={true}
              />
            </div>
          </div>
        ) : (
          /* Order Confirmation */
          <OrderConfirmation
            orderData={orderData}
            onNewOrder={handleNewOrder}
          />
        )}

        {/* Processing Overlay */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-card rounded-lg p-8 max-w-md mx-4 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                <Icon name="RefreshCw" size={24} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                Processing Your Order
              </h3>
              <p className="text-muted-foreground mb-4">
                Please wait while we secure your payment and confirm your order...
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        {currentStep < 2 && (
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Total</div>
              <div className="text-lg font-bold text-primary font-mono">
                LKR {(45500).toLocaleString()}.00
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-success">You save LKR 2,200</div>
              <div className="text-sm text-muted-foreground">2 items</div>
            </div>
          </div>
        )}
      </div>

      {/* Security Footer */}
      <footer className="bg-muted border-t border-border py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">PCI Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">Insured Delivery</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} The Gadget Hub. All rights reserved. | 
              <Link to="/terms" className="hover:text-foreground ml-1">Terms & Conditions</Link> | 
              <Link to="/privacy" className="hover:text-foreground ml-1">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutProcess;