import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { format } from 'date-fns';

const OrderCard = ({ order, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-success/10 text-success border-success/20';
      case 'shipped':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'processing':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return 'CheckCircle';
      case 'shipped':
        return 'Truck';
      case 'processing':
        return 'Clock';
      case 'cancelled':
        return 'XCircle';
      default:
        return 'Package';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM dd, yyyy • hh:mm a');
  };

  const getItemCount = (items) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return totalItems === 1 ? '1 item' : `${totalItems} items`;
  };

  return (
    <div 
      onClick={onClick}
      className="bg-card rounded-lg shadow-soft border border-border p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-6 flex-1">
          {/* Order Info */}
          <div className="min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="font-semibold text-card-foreground text-lg">{order.id}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                <Icon name={getStatusIcon(order.status)} size={12} className="inline mr-1" />
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{formatDate(order.date)}</p>
            <p className="text-muted-foreground text-sm">{getItemCount(order.items)}</p>
          </div>

          {/* Items Preview */}
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {order.items.slice(0, 3).map((item, index) => (
                <div key={index} className="w-12 h-12 bg-muted rounded-lg border-2 border-background flex items-center justify-center">
                  <Icon name="Package" size={16} className="text-muted-foreground" />
                </div>
              ))}
              {order.items.length > 3 && (
                <div className="w-12 h-12 bg-muted rounded-lg border-2 border-background flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">+{order.items.length - 3}</span>
                </div>
              )}
            </div>
          </div>

          {/* Primary Item */}
          <div className="min-w-0 flex-1">
            <p className="font-medium text-card-foreground truncate">{order.items[0]?.name}</p>
            {order.items.length > 1 && (
              <p className="text-sm text-muted-foreground">and {order.items.length - 1} more item{order.items.length > 2 ? 's' : ''}</p>
            )}
          </div>
        </div>

        {/* Amount & Action */}
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="font-bold text-xl font-mono text-foreground">{formatCurrency(order.total)}</p>
            {order.trackingNumber && (
              <p className="text-xs text-muted-foreground mt-1">Track: {order.trackingNumber}</p>
            )}
          </div>
          <Button variant="outline" size="sm" iconName="ChevronRight">
            Details
          </Button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-card-foreground text-lg mb-1">{order.id}</h3>
            <p className="text-muted-foreground text-sm">{formatDate(order.date)}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
            <Icon name={getStatusIcon(order.status)} size={12} className="inline mr-1" />
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>

        <div className="space-y-3">
          {/* Items */}
          <div>
            <p className="font-medium text-card-foreground">{order.items[0]?.name}</p>
            {order.items.length > 1 && (
              <p className="text-sm text-muted-foreground">and {order.items.length - 1} more item{order.items.length > 2 ? 's' : ''}</p>
            )}
            <p className="text-sm text-muted-foreground">{getItemCount(order.items)}</p>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <p className="font-bold text-lg font-mono text-foreground">{formatCurrency(order.total)}</p>
              {order.trackingNumber && (
                <p className="text-xs text-muted-foreground">Track: {order.trackingNumber}</p>
              )}
            </div>
            <Button variant="outline" size="sm" iconName="Eye">
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Status Info */}
      {(order.status === 'shipped' && order.estimatedDelivery) && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={14} />
            <span>Expected delivery: {format(new Date(order.estimatedDelivery), 'MMM dd, yyyy')}</span>
          </div>
        </div>
      )}

      {order.status === 'delivered' && order.deliveryDate && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-success">
            <Icon name="CheckCircle" size={14} />
            <span>Delivered on {format(new Date(order.deliveryDate), 'MMM dd, yyyy')}</span>
          </div>
        </div>
      )}

      {order.status === 'cancelled' && order.cancelReason && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-destructive">
            <Icon name="Info" size={14} />
            <span>{order.cancelReason}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;