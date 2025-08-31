import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from './Button';

const PageHeader = ({ 
  title, 
  subtitle, 
  showBackButton = true, 
  backButtonText = "Back",
  onBackClick,
  children 
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleGoBack = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }

    // Check if user came from a specific page via search params
    const fromPage = searchParams.get('from');
    
    if (fromPage) {
      // Navigate to the specific page they came from
      navigate(fromPage);
    } else if (window.history.length > 1) {
      // Go back to previous page in history
      navigate(-1);
    } else {
      // Default fallback to home page
      navigate('/home-page');
    }
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            {showBackButton && (
              <Button
                variant="ghost"
                onClick={handleGoBack}
                iconName="ArrowLeft"
                iconPosition="left"
                className="flex-shrink-0"
              >
                {backButtonText}
              </Button>
            )}
            
            <div>
              {title && (
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* Additional content (like search bars, etc.) */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 