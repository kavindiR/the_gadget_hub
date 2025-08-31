import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../context/CartContext';
import { useToast } from '../../../context/ToastContext';

const ProductCard = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { success } = useToast();

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart(product, 1);
      success(`${product.name} added to cart!`);
      // Simulate API delay
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getDiscountPercentage = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  const discountPercentage = getDiscountPercentage();

  return (
    <div 
      className="bg-card border border-border rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted">
        <Link to={`/product-details-page?id=${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-8 h-8 bg-card text-card-foreground rounded-full flex items-center justify-center shadow-soft hover:bg-muted transition-colors">
            <Icon name="Heart" size={16} />
          </button>
          <button className="w-8 h-8 bg-card text-card-foreground rounded-full flex items-center justify-center shadow-soft hover:bg-muted transition-colors">
            <Icon name="Eye" size={16} />
          </button>
        </div>

        {/* Stock Status */}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground text-sm font-medium px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.brand}
        </p>

        {/* Product Name */}
        <Link to={`/product-details-page?id=${product.id}`}>
          <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={`${
                  i < Math.floor(product.rating) 
                    ? 'text-warning fill-current' :'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          variant={isInCart(product.id) ? "outline" : "default"}
          onClick={handleAddToCart}
          disabled={product.stock === 0 || isLoading}
          loading={isLoading}
          iconName={isInCart(product.id) ? "Check" : "ShoppingCart"}
          iconPosition="left"
          fullWidth
        >
          {product.stock === 0 ? 'Out of Stock' : isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
        </Button>

        {/* Stock Info */}
        {product.stock > 0 && product.stock <= 5 && (
          <p className="text-xs text-warning mt-2 text-center">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;