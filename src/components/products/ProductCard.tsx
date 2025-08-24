import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { ProductType } from '../../types/productTypes';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card product-card h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden bg-gray-200">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        {product.featured && (
          <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold py-1 px-2 rounded">
            Featured
          </span>
        )}
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description.substring(0, 100)}...</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            {/* {product.price ? `$${product.price.toLocaleString()}` : 'Price on request'} */}
            {'Price on request'}
          </span>
          <Link 
            to={`/product/${product.id}`} 
            className="btn-primary flex items-center py-1 px-3 text-sm"
          >
            <MessageCircle size={16} className="mr-1" />
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;