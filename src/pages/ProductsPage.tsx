import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import { productData } from '../data/productData';
import { categoryData } from '../data/categoryData';
import { ProductType } from '../types/productTypes';

const ProductsPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: null as [number, number] | null,
  });

  // Set document title based on category
  useEffect(() => {
    const category = categoryData.find(cat => cat.slug === categorySlug);
    document.title = category 
      ? `${category.name} - AgriGrow` 
      : 'All Products - AgriGrow';
  }, [categorySlug]);

  // Filter products based on category slug and other filters
  useEffect(() => {
    let filtered = [...productData];
    
    // Filter by category slug
    if (categorySlug) {
      const category = categoryData.find(cat => cat.slug === categorySlug);
      if (category) {
        filtered = filtered.filter(product => product.categoryId === category.id);
      }
    }
    
    // Additional filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.categoryId));
    }
    
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brandId));
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(product => 
        product.price && product.price >= min && product.price <= max
      );
    }
    
    setFilteredProducts(filtered);
  }, [categorySlug, filters]);

  // Get active category for title and description
  const activeCategory = categoryData.find(cat => cat.slug === categorySlug);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {activeCategory ? activeCategory.name : 'All Products'}
          </h1>
          <p className="text-lg text-gray-600">
            {activeCategory 
              ? activeCategory.description 
              : 'Browse our complete collection of high-quality agricultural products'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters onFilterChange={setFilters} />
          </div>

          {/* Products grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} products
                  </p>
                </div>
                <ProductGrid products={filteredProducts} />
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;