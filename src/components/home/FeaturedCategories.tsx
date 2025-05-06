import React from 'react';
import { Link } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';

const FeaturedCategories: React.FC = () => {
  // Select first 4 categories for featuring
  const featuredCategories = categoryData.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From tractors and irrigation systems to seeds and hand tools, find everything you need
            for successful agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    <span className="inline-block bg-primary-600 text-white text-sm py-1 px-3 rounded">
                      Explore
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="btn-primary px-6 py-3"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;