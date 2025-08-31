import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product, onAddToCart, onQuantityChange, quantity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    if (quantity < product.stock) {
      onQuantityChange(quantity + 1);
    }
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          {product.name}
        </h1>
        <p className="text-muted-foreground">
          SKU: {product.sku}
        </p>
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold text-foreground font-mono">
            {formatPrice(product.finalPrice)}
          </span>
          {product.originalPrice > product.finalPrice && (
            <span className="text-lg text-muted-foreground line-through font-mono">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.originalPrice > product.finalPrice && (
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-success/10 text-success text-sm font-medium rounded-md">
              Save {formatPrice(product.originalPrice - product.finalPrice)}
            </span>
            <span className="text-sm text-muted-foreground">
              ({Math.round(((product.originalPrice - product.finalPrice) / product.originalPrice) * 100)}% off)
            </span>
          </div>
        )}
      </div>

      {/* Availability Status */}
      <div className="flex items-center space-x-2">
        <Icon 
          name={product.inStock ? "CheckCircle" : "XCircle"} 
          size={20} 
          color={product.inStock ? "var(--color-success)" : "var(--color-error)"} 
        />
        <span className={`font-medium ${product.inStock ? 'text-success' : 'text-error'}`}>
          {product.inStock ? `In Stock (${product.stock} available)` : 'Out of Stock'}
        </span>
      </div>

      {/* Delivery Information */}
      <div className="bg-muted rounded-lg p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Icon name="Truck" size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Delivery Information</span>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Standard Delivery: {product.deliveryTime}</p>
          <p>• Free delivery for orders over Rs. 50,000</p>
          <p>• Express delivery available</p>
        </div>
      </div>

      {/* Product Description */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
        <div className="text-muted-foreground">
          <p className={`${!isExpanded ? 'line-clamp-3' : ''}`}>
            {product.description}
          </p>
          {product.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:underline text-sm mt-1 font-medium"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Quantity Selector */}
      {product.inStock && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleQuantityDecrease}
                disabled={quantity <= 1}
                className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                <Icon name="Minus" size={16} />
              </button>
              <span className="w-16 text-center font-medium text-lg font-mono">
                {quantity}
              </span>
              <button
                onClick={handleQuantityIncrease}
                disabled={quantity >= product.stock}
                className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="default"
            size="lg"
            fullWidth
            iconName="ShoppingCart"
            iconPosition="left"
            onClick={() => onAddToCart(product, quantity)}
            className="text-lg font-semibold"
          >
            Add to Cart - {formatPrice(product.finalPrice * quantity)}
          </Button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button variant="outline" iconName="Heart" iconPosition="left" className="flex-1">
          Add to Wishlist
        </Button>
        <Button variant="outline" iconName="Share2" iconPosition="left" className="flex-1">
          Share Product
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;