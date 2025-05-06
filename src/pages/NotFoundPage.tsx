import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - AgriGrow';
  }, []);

  return (
    <div className="bg-gray-50 min-h-[70vh] flex items-center justify-center py-12">
      <div className="container max-w-md text-center">
        <AlertTriangle size={64} className="text-accent-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary px-6 py-2">
            Return Home
          </Link>
          <Link to="/products" className="btn-outline px-6 py-2">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;