import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PaymentForm = ({ formData, onFormChange, onNext, onBack, isProcessing }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isQuotationLoading, setIsQuotationLoading] = useState(false);
  const [quotationProgress, setQuotationProgress] = useState(0);
  const [distributorResults, setDistributorResults] = useState([]);
  const [finalQuotation, setFinalQuotation] = useState(null);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: 'Building2',
      description: 'Direct bank transfer'
    },
    {
      id: 'digital',
      name: 'Digital Wallet',
      icon: 'Smartphone',
      description: 'PayPal, Google Pay, Apple Pay'
    }
  ];

  const mockDistributors = [
    { name: 'TechMart Lanka', status: 'completed', price: 45000, savings: 2000 },
    { name: 'Gadget World', status: 'completed', price: 46500, savings: 500 },
    { name: 'Digital Hub', status: 'completed', price: 44800, savings: 2200 },
    { name: 'Electronics Plus', status: 'completed', price: 47000, savings: 0 },
    { name: 'Smart Devices', status: 'completed', price: 45200, savings: 1800 }
  ];

  useEffect(() => {
    // Simulate quotation fetching process
    setIsQuotationLoading(true);
    setQuotationProgress(0);

    const progressInterval = setInterval(() => {
      setQuotationProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsQuotationLoading(false);
          setDistributorResults(mockDistributors);
          setFinalQuotation({
            bestPrice: 44800,
            originalPrice: 47000,
            totalSavings: 2200,
            distributor: 'Digital Hub'
          });
          return 100;
        }
        return prev + 20;
      });
    }, 800);

    return () => clearInterval(progressInterval);
  }, []);

  const handleInputChange = (field, value) => {
    onFormChange('payment', { ...formData, [field]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (paymentMethod === 'card') {
      if (!formData.cardNumber?.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate?.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv?.trim()) newErrors.cvv = 'CVV is required';
      if (!formData.cardName?.trim()) newErrors.cardName = 'Cardholder name is required';
      
      // Card number validation (basic)
      if (formData.cardNumber && formData.cardNumber.replace(/\s/g, '').length < 16) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }
      
      // CVV validation
      if (formData.cvv && (formData.cvv.length < 3 || formData.cvv.length > 4)) {
        newErrors.cvv = 'Please enter a valid CVV';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      onNext({ ...formData, paymentMethod, finalQuotation });
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="space-y-6">
      {/* Quotation Loading */}
      {isQuotationLoading && (
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-spin">
              <Icon name="RefreshCw" size={16} color="white" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Fetching Best Quotations</h3>
          </div>
          
          <div className="space-y-4">
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${quotationProgress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Comparing prices from 5 distributors... {quotationProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Quotation Results */}
      {finalQuotation && (
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <Icon name="Check" size={16} color="white" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Best Price Found!</h3>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Best Price from {finalQuotation.distributor}</span>
              <span className="text-2xl font-bold text-success font-mono">
                LKR {finalQuotation.bestPrice.toLocaleString()}.00
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">You save:</span>
              <span className="font-semibold text-success font-mono">
                LKR {finalQuotation.totalSavings.toLocaleString()}.00
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-card-foreground">Distributor Comparison</h4>
            {distributorResults.map((distributor, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted rounded">
                <span className="text-sm text-card-foreground">{distributor.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">LKR {distributor.price.toLocaleString()}.00</span>
                  {distributor.savings > 0 && (
                    <span className="text-xs text-success">(-{distributor.savings})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payment Method Selection */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Icon name="CreditCard" size={16} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-card-foreground">Payment Method</h2>
        </div>

        <div className="space-y-3 mb-6">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                paymentMethod === method.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <Icon name={method.icon} size={20} className="text-muted-foreground" />
              <div className="flex-1">
                <h4 className="font-medium text-card-foreground">{method.name}</h4>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </label>
          ))}
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === 'card' && (
            <>
              <Input
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber || ''}
                onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                maxLength={19}
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Expiry Date"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate || ''}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.substring(0, 2) + '/' + value.substring(2, 4);
                    }
                    handleInputChange('expiryDate', value);
                  }}
                  maxLength={5}
                  required
                />
                <Input
                  label="CVV"
                  type="text"
                  placeholder="123"
                  value={formData.cvv || ''}
                  onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                  maxLength={4}
                  required
                />
              </div>
              
              <Input
                label="Cardholder Name"
                type="text"
                placeholder="John Doe"
                value={formData.cardName || ''}
                onChange={(e) => handleInputChange('cardName', e.target.value)}
                required
              />
            </>
          )}

          {paymentMethod === 'bank' && (
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-2">Bank Transfer Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bank:</span>
                  <span className="font-mono">Commercial Bank of Ceylon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account:</span>
                  <span className="font-mono">1234567890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Branch:</span>
                  <span className="font-mono">Colombo 03</span>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'digital' && (
            <div className="space-y-4">
              <Select
                label="Digital Wallet"
                placeholder="Select wallet"
                options={[
                  { value: 'paypal', label: 'PayPal' },
                  { value: 'googlepay', label: 'Google Pay' },
                  { value: 'applepay', label: 'Apple Pay' }
                ]}
                value={formData.digitalWallet || ''}
                onChange={(value) => handleInputChange('digitalWallet', value)}
                required
              />
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={onBack} iconName="ArrowLeft" iconPosition="left">
              Back to Shipping
            </Button>
            <Button 
              type="submit" 
              variant="default" 
              loading={isProcessing}
              iconName="Lock" 
              iconPosition="left"
              disabled={isQuotationLoading}
            >
              {isProcessing ? 'Processing...' : 'Secure Payment'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;