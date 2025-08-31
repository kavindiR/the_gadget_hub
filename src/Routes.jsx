import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ShoppingCart from './pages/shopping-cart';
import ProductDetailsPage from './pages/product-details-page';
import LoginPage from './pages/login-page';
import CheckoutProcess from './pages/checkout-process';
import ShopPage from './pages/shop-page';
import HomePage from './pages/home-page';
import RegisterPage from './pages/register-page';
import MyOrdersPage from './pages/my-orders-page';
import ServicesPage from './pages/services-page';
import AboutUsPage from './pages/about-us-page';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-details-page" element={<ProductDetailsPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/my-orders-page" element={<MyOrdersPage />} />
        <Route path="/checkout-process" element={<CheckoutProcess />} />
        <Route path="/shop-page" element={<ShopPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/services-page" element={<ServicesPage />} />
        <Route path="/about-us-page" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;