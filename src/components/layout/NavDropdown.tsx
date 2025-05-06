import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CategoryType } from '../../types/categoryTypes';

interface NavDropdownProps {
  categories: CategoryType[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ categories }) => {
  return (
    <div className="dropdown-menu w-[800px] grid grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <div key={category.id} className="group">
          <Link
            to={`/products/${category.slug}`}
            className="block group-hover:text-primary-600 transition-colors"
          >
            <div className="overflow-hidden rounded-lg mb-2">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-800 group-hover:text-primary-600">
                {category.name}
              </h3>
              <ArrowRight
                size={16}
                className="text-primary-600 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavDropdown;