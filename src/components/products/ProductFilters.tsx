import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { categoryData } from '../../data/categoryData';
import { brandData } from '../../data/brandData';

interface ProductFiltersProps {
  onFilterChange: (filters: {
    categories: string[];
    brands: string[];
    priceRange: [number, number] | null;
  }) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      brands: selectedBrands,
      priceRange
    });
    setMobileFiltersOpen(false);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange(null);
    onFilterChange({
      categories: [],
      brands: [],
      priceRange: null
    });
  };

  // Filter content JSX to reuse in both desktop and mobile views
  const filtersContent = (
    <>
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categoryData.map(category => (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <label
                htmlFor={`category-${category.id}`}
                className="ml-2 text-gray-700"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {brandData.map(brand => (
            <div key={brand.id} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onChange={() => toggleBrand(brand.id)}
                className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <label
                htmlFor={`brand-${brand.id}`}
                className="ml-2 text-gray-700"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={applyFilters}
          className="btn-primary py-2 px-4"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-2 px-4"
        >
          Reset
        </button>
      </div>
    </>
  );

  return (
    <div>
      {/* Mobile filter dialog */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          className="btn flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 w-full md:w-auto"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <Filter size={18} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Mobile filter panel */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4 mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-4">
              {filtersContent}
            </div>
          </div>
        </div>
      )}

      {/* Desktop filter section */}
      <div className="hidden lg:block bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Filters</h2>
        {filtersContent}
      </div>
    </div>
  );
};

export default ProductFilters;