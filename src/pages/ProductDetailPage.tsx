import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Truck, ShieldCheck, BadgeCheck, AlertCircle } from 'lucide-react';
import QuoteRequestForm from '../components/products/QuoteRequestForm';
import { productData } from '../data/productData';
import { brandData } from '../data/brandData';
import { categoryData } from '../data/categoryData';
import { ProductType } from '../types/productTypes';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    // Find product
    const foundProduct = productData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      
      // Set document title
      document.title = `${foundProduct.name} - AgriGrow`;
      
      // Find related products in the same category
      const related = productData
        .filter(p => p.categoryId === foundProduct.categoryId && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [productId]);

  // Get brand and category info
  const brand = product ? brandData.find(b => b.id === product.brandId) : null;
  const category = product ? categoryData.find(c => c.id === product.categoryId) : null;

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <AlertCircle size={48} className="mx-auto text-accent-500 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary px-6 py-2">
          Browse All Products
        </Link>
      </div>
    );
  }

  // Generate additional images (normally these would come from the database)
  const productImages = [
    product.image,
    ...(product.additionalImages || []),
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            {category && (
              <>
                <li>
                  <Link to={`/products/${category.slug}`} className="text-gray-500 hover:text-primary-600">
                    {category.name}
                  </Link>
                </li>
                <li>
                  <ChevronRight size={16} className="text-gray-400" />
                </li>
              </>
            )}
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Product images */}
            <div className="lg:col-span-2 p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Thumbnails */}
                <div className="order-2 md:order-1 md:col-span-1 flex md:flex-col space-x-3 md:space-x-0 md:space-y-3 mt-3 md:mt-0">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`border-2 rounded overflow-hidden ${
                        selectedImage === img ? 'border-primary-600' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt={`${product.name} - view ${index + 1}`} className="w-16 h-16 object-cover" />
                    </button>
                  ))}
                </div>
                
                {/* Main image */}
                <div className="order-1 md:order-2 md:col-span-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={selectedImage}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
               <p className="text-lg font-medium text-gray-700 mb-4">Price on request</p>
              {/* {product.price ? (
                <p className="text-2xl font-bold text-primary-600 mb-4">
                  ${product.price.toLocaleString()}
                </p>
              ) : (
                <p className="text-lg font-medium text-gray-700 mb-4">Price on request</p>
              )} */}
              
              {/* Brand */}
              {brand && (
                <div className="flex items-center mb-4">
                  <span className="text-gray-600 mr-2">Brand:</span>
                  <div className="flex items-center">
                    <img src={brand.logo} alt={brand.name} className="h-6 mr-2" />
                    <span className="font-medium">{brand.name}</span>
                  </div>
                </div>
              )}
              
              {/* Short description */}
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex">
                  <ShieldCheck size={20} className="text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Quality guaranteed</span>
                </div>
                <div className="flex">
                  <Truck size={20} className="text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Shipping available across Africa</span>
                </div>
                <div className="flex">
                  <BadgeCheck size={20} className="text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Authentic product</span>
                </div>
              </div>
              
              {/* Quote request form */}
              <QuoteRequestForm product={product} />
            </div>
          </div>
          
          {/* Product details and specs */}
          <div className="border-t border-gray-200 p-6">
            <h2 className="text-2xl font-bold mb-6">Product Details</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <div className="prose max-w-none">
                  <p className="mb-4">{product.fullDescription || product.description}</p>
                  {product.features && (
                    <>
                      <h4 className="text-lg font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                {product.specifications ? (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-4 py-3 font-medium text-gray-900 border-r">{key}</td>
                            <td className="px-4 py-3 text-gray-700">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-600">Specifications available upon request.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="card product-card h-full">
                  <Link to={`/product/${relatedProduct.id}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 hover:text-primary-600">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {relatedProduct.price
                          ? `$${relatedProduct.price.toLocaleString()}`
                          : 'Price on request'}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;