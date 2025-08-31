import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PageHeader from '../../components/ui/PageHeader';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import EmptyCart from './components/EmptyCart';
import CartSummaryMobile from './components/CartSummaryMobile';
import { useCart } from '../../context/CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, isLoading, updateQuantity: updateCartQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [updatingItems, setUpdatingItems] = useState(new Set());
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState('');



  const updateQuantity = async (itemId, newQuantity) => {
    setUpdatingItems(prev => new Set([...prev, itemId]));
    
    try {
      await updateCartQuantity(itemId, newQuantity);
    } catch (error) {
      console.error('Failed to update quantity:', error);
    } finally {
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const removeItem = async (itemId) => {
    try {
      await removeFromCart(itemId);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const applyPromoCode = async (code, discountAmount) => {
    setDiscount(discountAmount);
    setAppliedPromoCode(code);
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    
    try {
      // Simulate checkout preparation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store checkout data
      const checkoutData = {
        items: cartItems,
        subtotal: calculateSubtotal(),
        discount,
        deliveryFee: calculateDeliveryFee(),
        total: calculateTotal(),
        appliedPromoCode
      };
      
      localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
      navigate('/checkout-process');
      
    } catch (error) {
      console.error('Checkout failed:', error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateDeliveryFee = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 50000 ? 0 : 2500; // Free delivery over Rs. 50,000
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee() - discount;
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - The Gadget Hub</title>
          <meta name="description" content="Review and manage your selected gadgets before checkout" />
        </Helmet>
        <Header />
        <div className="min-h-screen bg-background pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Icon name="Loader2" size={48} className="animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading your cart...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - The Gadget Hub</title>
          <meta name="description" content="Your shopping cart is empty. Discover amazing gadgets and electronics." />
        </Helmet>
        <Header />
        <div className="min-h-screen bg-background pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <EmptyCart />
          </div>
        </div>
      </>
    );
  }

  const subtotal = calculateSubtotal();
  const deliveryFee = calculateDeliveryFee();
  const total = calculateTotal();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Helmet>
        <title>Shopping Cart ({itemCount} items) - The Gadget Hub</title>
        <meta name="description" content="Review your selected gadgets and proceed to secure checkout" />
      </Helmet>
      <Header />
      
      <div className="min-h-screen bg-background pt-16 pb-32 lg:pb-8">
        {/* Page Header */}
        <PageHeader
          title="Shopping Cart"
          subtitle={`${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart`}
        >
          <Link to="/shop-page">
            <Button variant="outline" iconName="ArrowLeft" iconPosition="left">
              Continue Shopping
            </Button>
          </Link>
        </PageHeader>

        <div className="max-w-7xl mx-auto px-4 py-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Mobile View */}
              <div className="lg:hidden space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                    isUpdating={updatingItems.has(item.id)}
                  />
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block bg-card border border-border rounded-lg shadow-soft overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left py-4 px-4 font-semibold text-card-foreground">
                        Product
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-card-foreground">
                        Price
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-card-foreground">
                        Quantity
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-card-foreground">
                        Subtotal
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-card-foreground">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                        isUpdating={updatingItems.has(item.id)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cart Actions */}
              <div className="hidden lg:flex items-center justify-between mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={() => window.location.reload()}
                  >
                    Update Cart
                  </Button>
                  <Button
                    variant="ghost"
                    iconName="Trash2"
                    iconPosition="left"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear your cart?')) {
                        clearCart();
                      }
                    }}
                  >
                    Clear Cart
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>

            {/* Order Summary - Desktop */}
            <div className="hidden lg:block">
              <OrderSummary
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                discount={discount}
                total={total}
                onApplyPromoCode={applyPromoCode}
                onCheckout={handleCheckout}
                isCheckingOut={isCheckingOut}
              />
            </div>
          </div>
        </div>

        {/* Mobile Cart Summary */}
        <CartSummaryMobile
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          discount={discount}
          total={total}
          itemCount={itemCount}
          onCheckout={handleCheckout}
          isCheckingOut={isCheckingOut}
        />
      </div>
    </>
  );
};

export default ShoppingCart;