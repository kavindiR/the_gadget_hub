import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PriceComparisonSection = ({ priceComparison }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="TrendingDown" size={20} className="text-success" />
            <h3 className="text-lg font-semibold text-foreground">
              Intelligent Price Comparison
            </h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:underline text-sm font-medium flex items-center space-x-1"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          We've compared prices from {priceComparison.distributorsChecked} distributors to get you the best deal
        </p>
      </div>

      <div className="p-4">
        {/* Best Price Highlight */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Icon name="Award" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">Best Price Found</span>
              </div>
              <p className="text-2xl font-bold text-foreground font-mono">
                {formatPrice(priceComparison.bestPrice)}
              </p>
              <p className="text-sm text-muted-foreground">
                From {priceComparison.bestDistributor}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">You save</p>
              <p className="text-lg font-bold text-success font-mono">
                {formatPrice(priceComparison.savings)}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Price Comparison Results</h4>
              <div className="space-y-2">
                {priceComparison.distributorPrices.map((distributor, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      distributor.isBest 
                        ? 'bg-success/5 border-success/20' :'bg-muted border-border'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {distributor.isBest && (
                        <Icon name="Crown" size={16} className="text-success" />
                      )}
                      <div>
                        <p className="font-medium text-foreground">{distributor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {distributor.availability}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono font-semibold ${
                        distributor.isBest ? 'text-success' : 'text-foreground'
                      }`}>
                        {formatPrice(distributor.price)}
                      </p>
                      {distributor.deliveryTime && (
                        <p className="text-xs text-muted-foreground">
                          {distributor.deliveryTime}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Icon name="Info" size={16} />
                <span>How Our Price Comparison Works</span>
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Icon name="Search" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>We automatically check prices from verified distributors</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Shield" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>All distributors are verified for authenticity and reliability</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>Prices are updated in real-time to ensure accuracy</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Truck" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>We factor in delivery costs and availability</span>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Last updated: {priceComparison.lastUpdated}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceComparisonSection;