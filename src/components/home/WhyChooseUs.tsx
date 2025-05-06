import React from 'react';
import { Award, Truck, Headset as HeadsetMic, ThumbsUp } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Award size={40} className="text-primary-600" />,
    title: 'Quality Products',
    description: 'We source only the highest quality agricultural tools and inputs from trusted manufacturers.',
  },
  {
    id: 2,
    icon: <Truck size={40} className="text-primary-600" />,
    title: 'Pan-African Delivery',
    description: 'We deliver products across Africa, ensuring farmers everywhere have access to modern tools.',
  },
  {
    id: 3,
    icon: <HeadsetMic size={40} className="text-primary-600" />,
    title: 'Expert Support',
    description: 'Our team of agricultural experts is ready to help you find the perfect solutions for your farm.',
  },
  {
    id: 4,
    icon: <ThumbsUp size={40} className="text-primary-600" />,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind all our products with excellent customer service and support.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FarmTower</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to supporting farmers with the best agricultural tools and inputs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;