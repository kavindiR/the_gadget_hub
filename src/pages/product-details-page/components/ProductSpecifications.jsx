import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProductSpecifications = ({ specifications }) => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [expandedSpecs, setExpandedSpecs] = useState({});

  const tabs = [
    { id: 'specifications', label: 'Specifications', icon: 'Settings' },
    { id: 'features', label: 'Features', icon: 'Star' },
    { id: 'warranty', label: 'Warranty', icon: 'Shield' }
  ];

  const toggleSpecExpansion = (specKey) => {
    setExpandedSpecs(prev => ({
      ...prev,
      [specKey]: !prev[specKey]
    }));
  };

  const renderSpecificationContent = () => {
    switch (activeTab) {
      case 'specifications':
        return (
          <div className="space-y-4">
            {Object.entries(specifications.technical).map(([category, specs]) => (
              <div key={category} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSpecExpansion(category)}
                  className="w-full px-4 py-3 bg-muted text-left flex items-center justify-between hover:bg-muted/80 transition-smooth"
                >
                  <h4 className="font-semibold text-foreground capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`transition-transform ${expandedSpecs[category] ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedSpecs[category] && (
                  <div className="px-4 py-3 bg-card space-y-2">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start">
                        <span className="text-muted-foreground text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-foreground text-sm font-medium text-right max-w-xs">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'features':
        return (
          <div className="space-y-3">
            {specifications.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        );

      case 'warranty':
        return (
          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Shield" size={20} className="text-primary" />
                <h4 className="font-semibold text-foreground">Warranty Information</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Warranty Period:</span>
                  <span className="text-foreground font-medium">{specifications.warranty.period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coverage:</span>
                  <span className="text-foreground font-medium">{specifications.warranty.coverage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Centers:</span>
                  <span className="text-foreground font-medium">{specifications.warranty.serviceCenters}</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Warranty is valid from the date of purchase</p>
              <p>• Physical damage and liquid damage not covered</p>
              <p>• Original purchase receipt required for warranty claims</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center space-x-2 transition-smooth ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {renderSpecificationContent()}
      </div>
    </div>
  );
};

export default ProductSpecifications;