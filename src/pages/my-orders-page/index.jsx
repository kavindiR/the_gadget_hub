import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import PageHeader from '../../components/ui/PageHeader';
import OrderCard from './components/OrderCard';
import OrderFilters from './components/OrderFilters';
import OrderStats from './components/OrderStats';
import EmptyOrders from './components/EmptyOrders';
import OrderDetailsModal from './components/OrderDetailsModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useOrders } from '../../context/OrderContext';

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { orders: userOrders, isLoading, loadOrders: loadUserOrders } = useOrders();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    searchQuery: ''
  });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());



  useEffect(() => {
    document.title = 'My Orders - The Gadget Hub';
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate('/login-page');
      return;
    }
    
    loadUserOrders();
  }, [isAuthenticated, navigate, loadUserOrders]);

  const loadOrders = async () => {
    try {
      await loadUserOrders();
      setFilteredOrders(userOrders);
    } catch (error) {
      console.error('Failed to load orders:', error);
    }
  };

  const refreshOrders = async () => {
    setIsRefreshing(true);
    try {
      await loadUserOrders();
      setFilteredOrders(userOrders);
      applyFilters(userOrders, filters);
    } finally {
      setIsRefreshing(false);
    }
  };

  const applyFilters = (orderList = userOrders, currentFilters = filters) => {
    let filtered = [...orderList];

    // Status filter
    if (currentFilters.status !== 'all') {
      filtered = filtered.filter(order => order.status === currentFilters.status);
    }

    // Date range filter
    if (currentFilters.dateRange !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (currentFilters.dateRange) {
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case '3months':
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(order => new Date(order.date) >= filterDate);
    }

    // Search filter
    if (currentFilters.searchQuery) {
      const query = currentFilters.searchQuery.toLowerCase();
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(query) ||
        order.items.some(item => item.name.toLowerCase().includes(query))
      );
    }

    setFilteredOrders(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(userOrders, newFilters);
  };

  const getOrderStats = () => {
    const total = userOrders.length;
    const delivered = userOrders.filter(o => o.status === 'delivered').length;
    const shipped = userOrders.filter(o => o.status === 'shipped').length;
    const processing = userOrders.filter(o => o.status === 'processing').length;
    const cancelled = userOrders.filter(o => o.status === 'cancelled').length;

    return { total, delivered, shipped, processing, cancelled };
  };

  const sortedOrders = [...filteredOrders].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mb-6"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-32 bg-muted rounded-lg"></div>
                  ))}
                </div>
                <div className="h-64 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <PageHeader
          title="My Orders"
          subtitle="Track and manage your order history"
        >
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={refreshOrders}
              loading={isRefreshing}
              iconName="RefreshCw"
              iconPosition="left"
            >
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Link to="/shop-page">
              <Button variant="default" iconName="Plus" iconPosition="left">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </PageHeader>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {userOrders.length === 0 ? (
            <EmptyOrders />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Orders List */}
              <div className="lg:col-span-3">
                {/* Filters */}
                <OrderFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  totalResults={filteredOrders.length}
                />

                {/* Orders */}
                {filteredOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No orders found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => handleFilterChange({ status: 'all', dateRange: 'all', searchQuery: '' })}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedOrders.map((order) => (
                      <OrderCard
                        key={order.id}
                        order={order}
                        onClick={() => setSelectedOrder(order)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <OrderStats stats={getOrderStats()} />

                {/* Quick Actions */}
                <div className="bg-card rounded-lg shadow-soft border border-border p-6">
                  <h3 className="font-semibold text-card-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/help/track-order" className="block">
                      <Button variant="outline" fullWidth iconName="Search" iconPosition="left">
                        Track Package
                      </Button>
                    </Link>
                    <Link to="/help/returns" className="block">
                      <Button variant="outline" fullWidth iconName="RotateCcw" iconPosition="left">
                        Return Request
                      </Button>
                    </Link>
                    <Link to="/help/support" className="block">
                      <Button variant="outline" fullWidth iconName="Headphones" iconPosition="left">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/home-page" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-lg font-bold text-card-foreground">The Gadget Hub</span>
              </Link>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                Sri Lanka's premier gadget destination with intelligent price comparison 
                and guaranteed best deals from multiple distributors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/home-page" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Home</Link></li>
                <li><Link to="/shop-page" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Shop</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Help Center</Link></li>
                <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Returns</Link></li>
                <li><Link to="/warranty" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Warranty</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© {currentYear} The Gadget Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyOrdersPage;