import React, { useState } from 'react';
import { ProductType } from '../../types/productTypes';
import { MessageSquare } from 'lucide-react';

interface QuoteRequestFormProps {
  product: ProductType;
}

const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to your backend
    // For this demo, we'll simulate a WhatsApp link
    
    const whatsappMessage = encodeURIComponent(
      `FARMTOWER QUOTE REQUEST\n\nHi, I'm interested in: ${product.name}\n\nQuantity: ${formData.quantity}\n\nAdditional message: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message (in production, this would use your business number)
    window.open(`https://wa.me/918968437757?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        quantity: '1',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <MessageSquare size={24} className="text-primary-600 mr-2" />
        <h3 className="text-xl font-semibold">Request Quote via WhatsApp</h3>
      </div>
      
      {submitted ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-md mb-4">
          <p className="font-medium">Quote request submitted!</p>
          <p>We're opening WhatsApp for you to send your quote request directly.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary py-3 text-lg flex items-center justify-center"
        >
          <MessageSquare size={20} className="mr-2" />
          Request Quote via WhatsApp
        </button>
        
        <p className="text-sm text-gray-500 mt-3">
          By clicking, you'll be redirected to WhatsApp to send your quote request directly to our team.
        </p>
      </form>
    </div>
  );
};

export default QuoteRequestForm;