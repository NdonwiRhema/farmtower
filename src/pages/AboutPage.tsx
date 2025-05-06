import React, { useEffect } from 'react';
import { Award, Users, Globe, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - AgriGrow';
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        {/* Hero section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img
              src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
              <div className="p-6 sm:p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  About FarrmTower
                </h1>
                <p className="text-xl text-white max-w-2xl">
                  Empowering African agriculture with world-class tools and inputs
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission and story */}
          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At FarmTower, our mission is to transform agriculture across Africa and beyond by providing access to high-quality 
                  agricultural inputs and implements. We believe that by equipping farmers with the right tools, we can help increase 
                  productivity, improve food security, and enhance livelihoods.
                </p>
                <p className="text-gray-600">
                  We are committed to an "Africa First" approach, focusing initially on addressing the unique challenges and 
                  opportunities within the African agricultural landscape, while maintaining a global vision for future growth.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                Farm Tower was born from a simple yet powerful observation:<br/>
               <strong>
                <em>  When food becomes more abundant, everything else becomes more affordable.
                 More supply of food in the market means lower costs, reduced pressure on household incomes, and ultimately, a better lifestyle for the average home.
                  And when families thrive, so does the economy.</em>
               </strong><br/>
                 So we asked ourselves:
                 <strong>
                  <em>
                  What if we could change the game for food producers?
                  What if the right tools—modern, efficient, and tailored for real farm conditions—were placed directly in the hands of farmers?
                  </em>
                 </strong>
                That question became our mission.
                </p>
                <p className="text-gray-600">
                    At Farm Tower, we provide the full stack of agricultural tools and technologies, from mechanized equipment to plant and livestock management solutions. 
                    Our goal is to equip farmers to produce more, produce better, and transform their output into value—boosting
                    food supply and building the foundation of a stronger, more resilient economy.

                    This isn’t just about farming.
                    It’s about creating a ripple effect—from the field to the family table, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at AgriGrow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award size={40} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to providing only the highest quality products and services that meet international standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users size={40} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with the farming communities we serve and supporting their growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe size={40} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Vision</h3>
              <p className="text-gray-600">
                While focusing on Africa first, we maintain a global perspective to bring the best agricultural solutions worldwide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf size={40} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We promote sustainable agricultural practices that benefit both farmers and the environment.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sarah Mwangi</h3>
                <p className="text-primary-600 mb-2">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With 15 years of experience in agricultural development across East Africa, Sarah leads our vision and strategy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                  <img
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                    alt="COO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">David Osei</h3>
                <p className="text-primary-600 mb-2">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  David oversees our supply chain and operations, ensuring we deliver quality products to farmers efficiently.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                  <img
                    src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg"
                    alt="CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Amina Diallo</h3>
                <p className="text-primary-600 mb-2">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Amina leads our technology initiatives, driving innovation in how we connect farmers with agricultural solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary-600 rounded-lg shadow-md overflow-hidden text-white">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Transforming Agriculture</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Whether you're a farmer looking for quality tools, a manufacturer interested in partnership, or someone passionate about 
              agricultural development, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;