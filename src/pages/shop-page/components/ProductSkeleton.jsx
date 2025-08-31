import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-soft animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 sm:h-56 bg-muted"></div>
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        <div className="h-3 bg-muted rounded w-16"></div>
        
        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded w-full"></div>
          <div className="h-3 bg-muted rounded w-2/3"></div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-muted rounded"></div>
            ))}
          </div>
          <div className="h-3 bg-muted rounded w-8"></div>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="h-5 bg-muted rounded w-20"></div>
          <div className="h-4 bg-muted rounded w-16"></div>
        </div>
        
        {/* Button */}
        <div className="h-10 bg-muted rounded w-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;