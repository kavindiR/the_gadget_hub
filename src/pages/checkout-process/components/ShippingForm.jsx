import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ShippingForm = ({ formData, onFormChange, onNext, errors }) => {
  const [deliveryOption, setDeliveryOption] = useState('standard');

  const provinces = [
    { value: 'western', label: 'Western Province' },
    { value: 'central', label: 'Central Province' },
    { value: 'southern', label: 'Southern Province' },
    { value: 'northern', label: 'Northern Province' },
    { value: 'eastern', label: 'Eastern Province' },
    { value: 'north-western', label: 'North Western Province' },
    { value: 'north-central', label: 'North Central Province' },
    { value: 'uva', label: 'Uva Province' },
    { value: 'sabaragamuwa', label: 'Sabaragamuwa Province' }
  ];

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      time: '3-5 business days',
      price: 'LKR 500.00',
      description: 'Regular delivery to your doorstep'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      time: '1-2 business days',
      price: 'LKR 1,200.00',
      description: 'Fast delivery with priority handling'
    },
    {
      id: 'pickup',
      name: 'Store Pickup',
      time: 'Same day',
      price: 'Free',
      description: 'Collect from our Colombo store'
    }
  ];

  const handleInputChange = (field, value) => {
    onFormChange('shipping', { ...formData, [field]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address?.trim()) newErrors.address = 'Address is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.province) newErrors.province = 'Province is required';
    if (!formData.postalCode?.trim()) newErrors.postalCode = 'Postal code is required';
    
    // Sri Lankan postal code validation (5 digits)
    if (formData.postalCode && !/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid 5-digit postal code';
    }
    
    // Sri Lankan phone validation
    if (formData.phone && !/^(\+94|0)?[1-9]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Sri Lankan phone number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      onNext({ ...formData, deliveryOption });
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Icon name="Truck" size={16} color="white" />
        </div>
        <h2 className="text-xl font-semibold text-card-foreground">Shipping Information</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            required
          />
          <Input
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+94 77 123 4567"
            value={formData.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
            description="We'll use this for delivery updates"
            required
          />
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <Input
            label="Street Address"
            type="text"
            placeholder="Enter your full address"
            value={formData.address || ''}
            onChange={(e) => handleInputChange('address', e.target.value)}
            error={errors.address}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="City"
              type="text"
              placeholder="Enter city"
              value={formData.city || ''}
              onChange={(e) => handleInputChange('city', e.target.value)}
              error={errors.city}
              required
            />
            <Select
              label="Province"
              placeholder="Select province"
              options={provinces}
              value={formData.province || ''}
              onChange={(value) => handleInputChange('province', value)}
              error={errors.province}
              required
            />
            <Input
              label="Postal Code"
              type="text"
              placeholder="12345"
              value={formData.postalCode || ''}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}
              error={errors.postalCode}
              maxLength={5}
              required
            />
          </div>
        </div>

        {/* Delivery Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-card-foreground">Delivery Options</h3>
          <div className="space-y-3">
            {deliveryOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-start space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                  deliveryOption === option.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value={option.id}
                  checked={deliveryOption === option.id}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="mt-1 w-4 h-4 text-primary border-border focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">{option.name}</h4>
                    <span className="font-semibold text-primary font-mono">{option.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{option.time}</span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Delivery Estimate */}
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="font-medium text-card-foreground">Estimated Delivery</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Based on your location and selected delivery option, your order will arrive by{' '}
            <span className="font-medium text-card-foreground">
              {new Date(Date.now() + (deliveryOption === 'express' ? 2 : deliveryOption === 'pickup' ? 1 : 5) * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" variant="default" iconName="ArrowRight" iconPosition="right">
            Continue to Payment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;