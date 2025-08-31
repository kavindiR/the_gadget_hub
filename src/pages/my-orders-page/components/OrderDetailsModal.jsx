import React, { useState } from 'react';
import { format } from 'date-fns';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderDetailsModal = ({ order, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'processing': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Package';
    }
  };

  const trackingSteps = [
    { status: 'ordered', label: 'Order Placed', date: order.date, completed: true },
    { status: 'processing', label: 'Processing', date: order.date, completed: ['processing', 'shipped', 'delivered'].includes(order.status) },
    { status: 'shipped', label: 'Shipped', date: order.status === 'shipped' ? new Date().toISOString() : null, completed: ['shipped', 'delivered'].includes(order.status) },
    { status: 'delivered', label: 'Delivered', date: order.deliveryDate, completed: order.status === 'delivered' }
  ];

  const tabs = [
    { id: 'details', label: 'Order Details', icon: 'FileText' },
    { id: 'tracking', label: 'Tracking', icon: 'MapPin' },
    { id: 'invoice', label: 'Invoice', icon: 'Receipt' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="w-full max-w-4xl max-h-[90vh] bg-card rounded-lg shadow-soft-lg overflow-hidden">
        {/* Header */}
        <div className="bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground">Order {order.id}</h2>
            <div className="flex items-center space-x-3 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                <Icon name={getStatusIcon(order.status)} size={14} className="inline mr-1" />
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
              <span className="text-muted-foreground text-sm">
                {format(new Date(order.date), 'MMM dd, yyyy • hh:mm a')}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-muted"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'details' && (
            <div className="space-y-8">
              {/* Order Items */}
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                      <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                        <Icon name="Package" size={24} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-card-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-card-foreground font-mono">{formatCurrency(item.price)}</p>
                        <p className="text-sm text-muted-foreground">each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">Shipping Address</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-card-foreground">{order.shippingAddress}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">Payment Information</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Method:</span>
                      <span className="font-medium text-card-foreground">{order.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-bold text-lg font-mono text-card-foreground">{formatCurrency(order.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tracking' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-card-foreground">Order Tracking</h3>
              
              {order.trackingNumber && (
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tracking Number:</span>
                    <span className="font-mono font-medium text-card-foreground">{order.trackingNumber}</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-success text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.completed ? (
                        <Icon name="Check" size={16} />
                      ) : (
                        <div className="w-3 h-3 bg-current rounded-full opacity-30"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${step.completed ? 'text-card-foreground' : 'text-muted-foreground'}`}>
                          {step.label}
                        </h4>
                        {step.date && (
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(step.date), 'MMM dd, yyyy • hh:mm a')}
                          </span>
                        )}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div className={`w-px h-8 ml-4 mt-2 ${step.completed ? 'bg-success' : 'bg-border'}`}></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {order.status === 'shipped' && order.estimatedDelivery && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Icon name="Clock" size={16} />
                    <span className="font-medium">
                      Estimated delivery: {format(new Date(order.estimatedDelivery), 'MMM dd, yyyy')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'invoice' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">Invoice</h3>
                <Button variant="outline" size="sm" iconName="Download">
                  Download PDF
                </Button>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-card-foreground">The Gadget Hub</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Tech Street<br />
                      Colombo 03, Sri Lanka<br />
                      +94 11 234 5678
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-card-foreground">Invoice #{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      Date: {format(new Date(order.date), 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h5 className="font-medium text-card-foreground mb-2">Bill To:</h5>
                  <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-sm font-medium text-card-foreground">Item</th>
                        <th className="text-center py-2 text-sm font-medium text-card-foreground">Qty</th>
                        <th className="text-right py-2 text-sm font-medium text-card-foreground">Price</th>
                        <th className="text-right py-2 text-sm font-medium text-card-foreground">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-2 text-sm text-card-foreground">{item.name}</td>
                          <td className="py-2 text-sm text-center text-card-foreground">{item.quantity}</td>
                          <td className="py-2 text-sm text-right font-mono text-card-foreground">{formatCurrency(item.price)}</td>
                          <td className="py-2 text-sm text-right font-mono text-card-foreground">{formatCurrency(item.price * item.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="py-2 text-right font-medium text-card-foreground">Total:</td>
                        <td className="py-2 text-right font-bold text-lg font-mono text-card-foreground">{formatCurrency(order.total)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-muted border-t border-border p-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          {order.status === 'delivered' && (
            <Button variant="outline" iconName="Star">
              Rate & Review
            </Button>
          )}
          {order.status === 'shipped' && order.trackingNumber && (
            <Button variant="outline" iconName="ExternalLink">
              Track Package
            </Button>
          )}
          {['processing', 'shipped'].includes(order.status) && (
            <Button variant="destructive" iconName="X">
              Cancel Order
            </Button>
          )}
          <Button variant="default" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;