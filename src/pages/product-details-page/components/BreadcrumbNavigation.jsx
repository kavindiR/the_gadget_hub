import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BreadcrumbNavigation = ({ category, productName }) => {
  const breadcrumbs = [
    { label: 'Shop', path: '/shop-page' },
    { label: category, path: `/shop-page?category=${category.toLowerCase()}` },
    { label: productName, path: '#', isActive: true }
  ];

  return (
    <nav className="bg-muted/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">
        <div className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
              )}
              {breadcrumb.isActive ? (
                <span className="text-foreground font-medium truncate max-w-xs">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-muted-foreground hover:text-foreground transition-smooth truncate"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;