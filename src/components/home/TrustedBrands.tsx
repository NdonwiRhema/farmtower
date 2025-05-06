import React from 'react';
import { brandData } from '../../data/brandData';

const TrustedBrands: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Brands</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with leading agricultural brands to provide you with quality products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brandData.map((brand) => (
            <div key={brand.id} className="group p-4 flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;