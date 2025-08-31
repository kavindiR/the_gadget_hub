import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      loadOrders();
    }
  }, [isAuthenticated, user]);

  const loadOrders = async () => {
    setIsLoading(true);
    try {
      // Load orders from localStorage
      const savedOrders = JSON.parse(localStorage.getItem(`orders_${user?.id}`) || '[]');
      setOrders(savedOrders);
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createOrder = async (orderData) => {
    if (!isAuthenticated || !user) {
      throw new Error('You must be logged in to create an order');
    }

    setIsLoading(true);
    try {
      const newOrder = {
        id: `order_${Date.now()}`,
        userId: user.id,
        ...orderData,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        items: orderData.items || [],
        total: orderData.total || 0,
        shippingAddress: orderData.shippingAddress || {},
        paymentMethod: orderData.paymentMethod || 'credit_card'
      };

      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      
      // Save to localStorage
      localStorage.setItem(`orders_${user.id}`, JSON.stringify(updatedOrders));
      
      return newOrder;
    } catch (error) {
      throw new Error('Failed to create order');
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    if (!isAuthenticated || !user) {
      throw new Error('You must be logged in to update orders');
    }

    setIsLoading(true);
    try {
      const updatedOrders = orders.map(order => 
        order.id === orderId 
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      );
      
      setOrders(updatedOrders);
      localStorage.setItem(`orders_${user.id}`, JSON.stringify(updatedOrders));
      
      return updatedOrders.find(order => order.id === orderId);
    } catch (error) {
      throw new Error('Failed to update order');
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  const cancelOrder = async (orderId) => {
    return updateOrderStatus(orderId, 'cancelled');
  };

  const value = {
    orders,
    isLoading,
    createOrder,
    updateOrderStatus,
    getOrderById,
    getOrdersByStatus,
    cancelOrder,
    loadOrders
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}; 