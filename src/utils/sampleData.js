// Sample data utility for testing
export const addSampleOrders = (userId) => {
  const sampleOrders = [
    {
      id: 'order_1703123456789',
      userId: userId,
      status: 'delivered',
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-18T14:00:00Z',
      total: 125000,
      deliveryFee: 500,
      items: [
        { 
          name: 'iPhone 15 Pro', 
          quantity: 1, 
          price: 125000, 
          image: '/api/placeholder/60/60',
          id: 'item_1'
        }
      ],
      shippingAddress: {
        fullName: 'John Doe',
        address: '123 Main Street',
        city: 'Colombo',
        postalCode: '00300',
        phone: '+94 77 123 4567'
      },
      paymentMethod: 'credit_card',
      deliveryOption: 'delivery',
      trackingNumber: 'TRK123456789',
      deliveryDate: '2024-01-18T14:00:00Z'
    },
    {
      id: 'order_1703123456790',
      userId: userId,
      status: 'shipped',
      createdAt: '2024-01-20T15:45:00Z',
      updatedAt: '2024-01-22T09:15:00Z',
      total: 85000,
      deliveryFee: 500,
      items: [
        { 
          name: 'Samsung Galaxy S24', 
          quantity: 1, 
          price: 75000, 
          image: '/api/placeholder/60/60',
          id: 'item_2'
        },
        { 
          name: 'Phone Case', 
          quantity: 1, 
          price: 10000, 
          image: '/api/placeholder/60/60',
          id: 'item_3'
        }
      ],
      shippingAddress: {
        fullName: 'John Doe',
        address: '456 Garden Road',
        city: 'Kandy',
        postalCode: '20000',
        phone: '+94 77 123 4567'
      },
      paymentMethod: 'digital_wallet',
      deliveryOption: 'delivery',
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-25T16:00:00Z'
    },
    {
      id: 'order_1703123456791',
      userId: userId,
      status: 'processing',
      createdAt: '2024-01-25T09:20:00Z',
      updatedAt: '2024-01-25T09:20:00Z',
      total: 45000,
      deliveryFee: 0,
      items: [
        { 
          name: 'Wireless Earbuds', 
          quantity: 2, 
          price: 22500, 
          image: '/api/placeholder/60/60',
          id: 'item_4'
        }
      ],
      shippingAddress: {
        fullName: 'John Doe',
        address: '789 Beach Road',
        city: 'Galle',
        postalCode: '80000',
        phone: '+94 77 123 4567'
      },
      paymentMethod: 'bank_transfer',
      deliveryOption: 'pickup'
    }
  ];

  localStorage.setItem(`orders_${userId}`, JSON.stringify(sampleOrders));
  return sampleOrders;
};

export const addSampleCartItems = () => {
  const sampleCartItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB Natural Titanium',
      price: 485000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      category: 'smartphones',
      brand: 'Apple',
      description: 'Latest iPhone with titanium design, A17 Pro chip, and advanced camera system',
      rating: 4.8,
      reviewCount: 245,
      stock: 12
    },
    {
      id: 2,
      name: 'MacBook Air 13-inch M3 Chip 8GB RAM 256GB SSD',
      price: 425000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      category: 'laptops',
      brand: 'Apple',
      description: 'Professional laptop with M3 chip, Liquid Retina display',
      rating: 4.9,
      reviewCount: 156,
      stock: 8
    }
  ];

  localStorage.setItem('cartItems', JSON.stringify(sampleCartItems));
  localStorage.setItem('cartItemCount', '2');
  return sampleCartItems;
}; 