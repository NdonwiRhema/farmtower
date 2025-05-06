import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { categoryData } from '../../data/categoryData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[350px] bg-white shadow-lg overflow-y-auto transition-transform duration-300 transform">
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button onClick={onClose} className="text-gray-700 hover:text-primary-600 p-1">
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-6">
            <Link to="/" className="block text-lg font-medium py-2 border-b" onClick={onClose}>
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium py-2 border-b"
                onClick={() => toggleCategory('products')}
              >
                Products
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedCategory === 'products' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {expandedCategory === 'products' && (
                <div className="pl-4 py-2 space-y-3 animate-fade-in">
                  {categoryData.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products/${category.slug}`}
                      className="flex items-center py-1 hover:text-primary-600"
                      onClick={onClose}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-10 h-10 rounded object-cover mr-3"
                      />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block text-lg font-medium py-2 border-b" onClick={onClose}>
              About Us
            </Link>
            <Link to="/contact" className="block text-lg font-medium py-2 border-b" onClick={onClose}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;