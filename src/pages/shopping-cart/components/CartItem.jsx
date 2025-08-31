import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, isUpdating }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1 || newQuantity > item.maxQuantity) return;
    
    setQuantity(newQuantity);
    await onUpdateQuantity(item.id, newQuantity);
  };

  const handleRemove = async () => {
    setIsRemoving(true);
    await onRemove(item.id);
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const subtotal = item.price * quantity;

  return (
    <>
      {/* Mobile Card Layout */}
      <div className="lg:hidden bg-card border border-border rounded-lg p-4 mb-4 shadow-soft">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground text-sm mb-1 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
              {item.category}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary font-mono text-sm">
                {formatPrice(item.price)}
              </span>
              <span className="text-xs text-muted-foreground">
                Stock: {item.stock}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1 || isUpdating}
              className="h-8 w-8"
            >
              <Icon name="Minus" size={14} />
            </Button>
            
            <span className="font-medium text-card-foreground min-w-[2rem] text-center">
              {isUpdating ? '...' : quantity}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= item.maxQuantity || isUpdating}
              className="h-8 w-8"
            >
              <Icon name="Plus" size={14} />
            </Button>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-bold text-card-foreground font-mono text-sm">
              {formatPrice(subtotal)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemove}
              disabled={isRemoving}
              className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              {isRemoving ? (
                <Icon name="Loader2" size={14} className="animate-spin" />
              ) : (
                <Icon name="Trash2" size={14} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Table Row */}
      <tr className="hidden lg:table-row border-b border-border hover:bg-muted/50 transition-smooth">
        <td className="py-4 pr-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-card-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.category}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Stock: {item.stock} available
              </p>
            </div>
          </div>
        </td>
        
        <td className="py-4 px-4 text-center">
          <span className="font-bold text-primary font-mono">
            {formatPrice(item.price)}
          </span>
        </td>
        
        <td className="py-4 px-4 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1 || isUpdating}
              className="h-8 w-8"
            >
              <Icon name="Minus" size={14} />
            </Button>
            
            <span className="font-medium text-card-foreground min-w-[2rem] text-center">
              {isUpdating ? '...' : quantity}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= item.maxQuantity || isUpdating}
              className="h-8 w-8"
            >
              <Icon name="Plus" size={14} />
            </Button>
          </div>
        </td>
        
        <td className="py-4 px-4 text-center">
          <span className="font-bold text-card-foreground font-mono">
            {formatPrice(subtotal)}
          </span>
        </td>
        
        <td className="py-4 pl-4 text-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            disabled={isRemoving}
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            {isRemoving ? (
              <Icon name="Loader2" size={14} className="animate-spin" />
            ) : (
              <Icon name="Trash2" size={14} />
            )}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;