import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import PageHeader from '../../components/ui/PageHeader';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductSpecifications from './components/ProductSpecifications';
import PriceComparisonSection from './components/PriceComparisonSection';
import RelatedProducts from './components/RelatedProducts';
import Icon from '../../components/AppIcon';

const ProductDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cartLoading, setCartLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Mock product data
  const mockProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB Natural Titanium",
      sku: "IPH15PM256NT",
      category: "Smartphones",
      images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&hue=30",
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&hue=60"
      ],
      originalPrice: 485000,
      finalPrice: 465000,
      inStock: true,
      stock: 15,
      deliveryTime: "2-3 business days",
      rating: 4.8,
      reviewCount: 127,
      description: `The iPhone 15 Pro Max represents the pinnacle of smartphone technology with its revolutionary titanium design and advanced A17 Pro chip. Featuring a stunning 6.7-inch Super Retina XDR display with ProMotion technology, this device delivers exceptional performance for both everyday tasks and professional workflows.\n\nThe advanced camera system includes a 48MP Main camera with 2x Telephoto capabilities, perfect for capturing stunning photos and videos in any lighting condition. With USB-C connectivity and Action Button customization, the iPhone 15 Pro Max adapts to your unique workflow needs.`,
      specifications: {
        technical: {
          display: {
            screenSize: "6.7-inch Super Retina XDR",
            resolution: "2796 x 1290 pixels",
            technology: "OLED with ProMotion",
            brightness: "2000 nits peak brightness"
          },
          performance: {
            processor: "A17 Pro chip",
            storage: "256GB",
            ram: "8GB",
            operatingSystem: "iOS 17"
          },
          camera: {
            mainCamera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
            frontCamera: "12MP TrueDepth",
            videoRecording: "4K ProRes, Cinematic mode",
            features: "Night mode, Portrait mode, Smart HDR 5"
          },
          connectivity: {
            cellular: "5G (sub-6 GHz and mmWave)",
            wifi: "Wi-Fi 6E",
            bluetooth: "Bluetooth 5.3",
            connector: "USB-C"
          },
          physical: {
            dimensions: "159.9 x 76.7 x 8.25 mm",
            weight: "221 grams",
            material: "Titanium frame, Ceramic Shield front",
            colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium"
          }
        },
        features: [
          "Dynamic Island for seamless multitasking",
          "Always-On display with customizable Lock Screen",
          "Action Button for quick access to favorite features",
          "Advanced Face ID for secure authentication",
          "MagSafe wireless charging up to 15W",
          "Water resistance rating IP68",
          "Emergency SOS via satellite",
          "Crash Detection for enhanced safety",
          "Spatial video recording for Apple Vision Pro",
          "Professional-grade camera controls"
        ],
        warranty: {
          period: "1 Year International Warranty",
          coverage: "Manufacturing defects and hardware issues",
          serviceCenters: "Available island-wide"
        }
      },
      priceComparison: {
        distributorsChecked: 8,
        bestPrice: 465000,
        bestDistributor: "TechHub Lanka",
        savings: 20000,
        lastUpdated: "2 hours ago",
        distributorPrices: [
          {
            name: "TechHub Lanka",
            price: 465000,
            availability: "In Stock - 15 units",
            deliveryTime: "2-3 days",
            isBest: true
          },
          {
            name: "Mobile World",
            price: 472000,
            availability: "In Stock - 8 units",
            deliveryTime: "1-2 days",
            isBest: false
          },
          {
            name: "Gadget Store",
            price: 478000,
            availability: "In Stock - 12 units",
            deliveryTime: "3-4 days",
            isBest: false
          },
          {
            name: "Digital Plaza",
            price: 485000,
            availability: "In Stock - 5 units",
            deliveryTime: "2-3 days",
            isBest: false
          }
        ]
      }
    },
    {
      id: "2",
      name: "MacBook Pro 14-inch M3 Pro 512GB Space Black",
      sku: "MBP14M3P512SB",
      category: "Laptops",
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop&sat=-50"
      ],
      originalPrice: 685000,
      finalPrice: 658000,
      inStock: true,
      stock: 8,
      deliveryTime: "3-5 business days",
      rating: 4.9,
      reviewCount: 89,
      description: `The MacBook Pro 14-inch with M3 Pro chip delivers exceptional performance for creative professionals and power users. Featuring a stunning Liquid Retina XDR display and advanced thermal architecture, this laptop handles demanding workflows with ease.\n\nWith up to 18 hours of battery life and a comprehensive port selection including Thunderbolt 4, HDMI, and MagSafe 3, the MacBook Pro adapts to any professional environment.`,
      specifications: {
        technical: {
          display: {
            screenSize: "14.2-inch Liquid Retina XDR",
            resolution: "3024 x 1964 pixels",
            technology: "Mini-LED backlight",
            brightness: "1600 nits peak brightness"
          },
          performance: {
            processor: "Apple M3 Pro chip",
            storage: "512GB SSD",
            ram: "18GB Unified Memory",
            operatingSystem: "macOS Sonoma"
          }
        },
        features: [
          "M3 Pro chip with 12-core CPU and 18-core GPU",
          "18GB unified memory for seamless multitasking",
          "512GB SSD storage with blazing-fast performance",
          "14.2-inch Liquid Retina XDR display",
          "1080p FaceTime HD camera with advanced image signal processor",
          "Six-speaker sound system with Spatial Audio",
          "Up to 18 hours of battery life",
          "MagSafe 3 charging port",
          "Three Thunderbolt 4 ports",
          "HDMI port and SDXC card slot"
        ],
        warranty: {
          period: "1 Year International Warranty",
          coverage: "Manufacturing defects and hardware issues",
          serviceCenters: "Available island-wide"
        }
      },
      priceComparison: {
        distributorsChecked: 6,
        bestPrice: 658000,
        bestDistributor: "Apple Store Lanka",
        savings: 27000,
        lastUpdated: "1 hour ago",
        distributorPrices: [
          {
            name: "Apple Store Lanka",
            price: 658000,
            availability: "In Stock - 8 units",
            deliveryTime: "3-5 days",
            isBest: true
          },
          {
            name: "Tech Solutions",
            price: 672000,
            availability: "In Stock - 3 units",
            deliveryTime: "2-4 days",
            isBest: false
          }
        ]
      }
    }
  ];

  // Mock related products
  const relatedProducts = [
    {
      id: "3",
      name: "iPhone 15 Pro 128GB Blue Titanium",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&hue=220",
      originalPrice: 385000,
      finalPrice: 368000,
      inStock: true,
      rating: 4.7,
      reviewCount: 94
    },
    {
      id: "4",
      name: "AirPods Pro (2nd generation)",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
      originalPrice: 85000,
      finalPrice: 78000,
      inStock: true,
      rating: 4.8,
      reviewCount: 156
    },
    {
      id: "5",
      name: "MagSafe Charger",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      originalPrice: 15000,
      finalPrice: 13500,
      inStock: true,
      rating: 4.5,
      reviewCount: 67
    },
    {
      id: "6",
      name: "iPhone 15 Silicone Case",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
      originalPrice: 12000,
      finalPrice: 10800,
      inStock: true,
      rating: 4.3,
      reviewCount: 43
    }
  ];

  useEffect(() => {
    const productId = searchParams.get('id') || '1';
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.id === productId);
      setProduct(foundProduct || mockProducts[0]);
      setLoading(false);
    }, 1000);
  }, [searchParams]);

  const handleAddToCart = async (productToAdd, qty) => {
    setCartLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex(item => item.id === productToAdd.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity
      existingCart[existingItemIndex].quantity += qty;
    } else {
      // Add new item
      existingCart.push({
        id: productToAdd.id,
        name: productToAdd.name,
        price: productToAdd.finalPrice,
        image: productToAdd.images ? productToAdd.images[0] : productToAdd.image,
        quantity: qty
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    localStorage.setItem('cartItemCount', existingCart.reduce((sum, item) => sum + item.quantity, 0).toString());
    
    setCartLoading(false);
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-16 min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <Icon name="Loader2" size={32} className="animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading product details...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="pt-16 min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <div className="text-center py-16">
              <Icon name="AlertCircle" size={48} className="text-error mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h2>
              <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
              <button
                onClick={() => navigate('/shop-page')}
                className="text-primary hover:underline font-medium"
              >
                Return to Shop
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen bg-background">
        {/* Page Header */}
        <PageHeader
          title={product.name}
          subtitle={product.category}
          backButtonText="Back to Shop"
        />

        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          category={product.category} 
          productName={product.name} 
        />

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-4 py-3 rounded-lg shadow-soft flex items-center space-x-2 animate-slide-down">
            <Icon name="CheckCircle" size={20} />
            <span className="font-medium">Added to cart successfully!</span>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            <ProductImageGallery 
              images={product.images} 
              productName={product.name} 
            />
            <ProductInfo
              product={product}
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
            />
            <ProductSpecifications specifications={product.specifications} />
            <PriceComparisonSection priceComparison={product.priceComparison} />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8 mb-8">
              {/* Left Column - Images */}
              <div className="col-span-6">
                <ProductImageGallery 
                  images={product.images} 
                  productName={product.name} 
                />
              </div>

              {/* Right Column - Product Info */}
              <div className="col-span-6">
                <ProductInfo
                  product={product}
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>

            {/* Full Width Sections */}
            <div className="space-y-8">
              <ProductSpecifications specifications={product.specifications} />
              <PriceComparisonSection priceComparison={product.priceComparison} />
            </div>
          </div>

          {/* Related Products - Both Mobile and Desktop */}
          <div className="mt-12">
            <RelatedProducts 
              products={relatedProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        {/* Loading Overlay */}
        {cartLoading && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-card border border-border rounded-lg p-6 flex items-center space-x-3">
              <Icon name="Loader2" size={24} className="animate-spin text-primary" />
              <span className="text-foreground font-medium">Adding to cart...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsPage;