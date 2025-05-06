import React from 'react';
import ProductCard from '../products/ProductCard';
import { productData } from '../../data/productData';

const FeaturedProducts: React.FC = () => {
  // Get products marked as featured
  const featured = productData.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our selection of high-quality agricultural products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;