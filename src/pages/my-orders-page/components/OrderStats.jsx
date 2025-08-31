import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Orders',
      value: stats.total,
      icon: 'Package',
      color: 'text-foreground'
    },
    {
      label: 'Delivered',
      value: stats.delivered,
      icon: 'CheckCircle',
      color: 'text-success'
    },
    {
      label: 'Shipped',
      value: stats.shipped,
      icon: 'Truck',
      color: 'text-blue-600'
    },
    {
      label: 'Processing',
      value: stats.processing,
      icon: 'Clock',
      color: 'text-warning'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-soft border border-border p-6">
      <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
        <Icon name="BarChart3" size={16} className="mr-2" />
        Order Statistics
      </h3>

      <div className="space-y-4">
        {statItems.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center`}>
                <Icon name={stat.icon} size={14} className={stat.color} />
              </div>
              <span className="text-sm font-medium text-card-foreground">{stat.label}</span>
            </div>
            <span className={`font-bold text-lg ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Progress Bar for Delivered Orders */}
      {stats.total > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Delivery Rate</span>
            <span className="text-sm font-medium text-success">
              {Math.round((stats.delivered / stats.total) * 100)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-success h-2 rounded-full transition-all duration-300"
              style={{ width: `${(stats.delivered / stats.total) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderStats;