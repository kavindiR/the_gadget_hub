import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const categoriesRef = useRef(null);
  const cartRef = useRef(null);
  const { isAuthenticated, user, logout } = useAuth();
  const { cartItems, getCartCount, removeFromCart, getCartTotal } = useCart();

  const navigationItems = [
    { label: 'Home', path: '/home-page', icon: 'Home' },
    { label: 'Shop', path: '/shop-page', icon: 'Store' },
    { label: 'Categories', path: '#', icon: 'Grid3x3', hasDropdown: true },
    { label: 'Services', path: '/services-page', icon: 'Settings' },
    { label: 'About Us', path: '/about-us-page', icon: 'Info' },
  ];

  const categories = [
    { label: 'Smartphones', path: '/shop-page?category=smartphones', icon: 'Smartphone' },
    { label: 'Laptops', path: '/shop-page?category=laptops', icon: 'Laptop' },
    { label: 'Accessories', path: '/shop-page?category=accessories', icon: 'Headphones' },
  ];

  const userMenuItems = [
    { label: 'My Orders', path: '/my-orders', icon: 'Package' },
    { label: 'Profile', path: '/profile', icon: 'User' },
    { label: 'Settings', path: '/settings', icon: 'Settings' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Update cart item count from context
    setCartItemCount(getCartCount());
  }, [getCartCount]);

  const handleCategoryClick = (categoryPath) => {
    setIsCategoriesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Show user menu or navigate to profile
      navigate('/my-orders-page');
    } else {
      navigate('/login-page');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/home-page');
  };

  const isActivePath = (path) => {
    if (path === '#') return false;
    return location.pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            {/* Logo */}
            <Link to="/home-page" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                The Gadget Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative" ref={item.hasDropdown ? categoriesRef : null}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                        isCategoriesOpen
                          ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.label}</span>
                      <Icon name="ChevronDown" size={16} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                        isActivePath(item.path)
                          ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Categories Dropdown */}
                  {item.hasDropdown && isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-soft-lg animate-slide-down">
                      <div className="py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.label}
                            to={category.path}
                            onClick={() => handleCategoryClick(category.path)}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                          >
                            <Icon name={category.icon} size={16} />
                            <span>{category.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search gadgets..."
                    className="w-64 pl-10 pr-4 py-2 text-sm bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Cart */}
              <div className="relative" ref={cartRef}>
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <Icon name="ShoppingCart" size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                      {cartItemCount > 99 ? '99+' : cartItemCount}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {isCartOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-soft-lg animate-slide-down">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-popover-foreground mb-3">Shopping Cart</h3>
                      {cartItems.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                      ) : (
                        <div className="space-y-3">
                          {cartItems.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                              <div className="w-12 h-12 bg-background rounded-md flex items-center justify-center">
                                <Icon name="Smartphone" size={20} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-xs text-muted-foreground">LKR {item.price.toLocaleString()}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">x{item.quantity}</span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-destructive hover:text-destructive/80 transition-smooth"
                                >
                                  <Icon name="X" size={16} />
                                </button>
                              </div>
                            </div>
                          ))}
                          {cartItems.length > 3 && (
                            <p className="text-xs text-muted-foreground text-center">
                              +{cartItems.length - 3} more items
                            </p>
                          )}
                          <div className="border-t border-border pt-3">
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-medium">Total:</span>
                              <span className="font-bold text-lg font-mono">LKR {getCartTotal().toLocaleString()}</span>
                            </div>
                            <Link to="/shopping-cart" onClick={() => setIsCartOpen(false)}>
                              <Button variant="default" fullWidth>
                                View Cart
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Button */}
              <Button
                variant={isAuthenticated ? "outline" : "default"}
                onClick={handleAuthAction}
                iconName={isAuthenticated ? "User" : "LogIn"}
                iconPosition="left"
                className="hidden sm:flex"
              >
                {isAuthenticated ? (user?.name || "Account") : "Login"}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-down">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search gadgets..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>

              {/* Mobile Navigation */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name={item.icon} size={16} />
                          <span>{item.label}</span>
                        </div>
                        <Icon name="ChevronDown" size={16} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCategoriesOpen && (
                        <div className="ml-6 mt-2 space-y-1">
                          {categories.map((category) => (
                            <Link
                              key={category.label}
                              to={category.path}
                              onClick={() => {
                                handleCategoryClick(category.path);
                                setIsMobileMenuOpen(false);
                              }}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
                            >
                              <Icon name={category.icon} size={16} />
                              <span>{category.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                        isActivePath(item.path)
                          ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item.icon} size={16} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-border space-y-2">
                {isAuthenticated ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigate('/my-orders-page');
                        setIsMobileMenuOpen(false);
                      }}
                      iconName="Package"
                      iconPosition="left"
                      fullWidth
                    >
                      My Orders
                    </Button>
                    <Button
                      variant="default"
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      iconName="LogOut"
                      iconPosition="left"
                      fullWidth
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="default"
                    onClick={() => {
                      navigate('/login-page');
                      setIsMobileMenuOpen(false);
                    }}
                    iconName="LogIn"
                    iconPosition="left"
                    fullWidth
                  >
                    Login / Register
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>


    </>
  );
};

export default Header;