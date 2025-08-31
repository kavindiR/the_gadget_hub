import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ products, onAddToCart }) => {
  const scrollContainerRef = useRef(null);

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Related Products</h3>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 bg-background border border-border rounded-lg overflow-hidden hover:shadow-soft transition-smooth">
              {/* Product Image */}
              <Link to={`/product-details-page?id=${product.id}`} className="block">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/product-details-page?id=${product.id}`}>
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-smooth">
                    {product.name}
                  </h4>
                </Link>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-foreground font-mono">
                      {formatPrice(product.finalPrice)}
                    </span>
                    {product.originalPrice > product.finalPrice && (
                      <span className="text-sm text-muted-foreground line-through font-mono">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.finalPrice && (
                    <span className="text-xs text-success font-medium">
                      {Math.round(((product.originalPrice - product.finalPrice) / product.originalPrice) * 100)}% off
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-1 mb-3">
                  <Icon 
                    name={product.inStock ? "CheckCircle" : "XCircle"} 
                    size={12} 
                    className={product.inStock ? 'text-success' : 'text-error'}
                  />
                  <span className={`text-xs font-medium ${product.inStock ? 'text-success' : 'text-error'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  disabled={!product.inStock}
                  onClick={() => onAddToCart(product, 1)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;