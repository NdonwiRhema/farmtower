import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
// import TrustedBrands from '../components/home/TrustedBrands';
import WhyChooseUs from '../components/home/WhyChooseUs';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'FarmTower - Your Farm, Our Tools';
  }, []);
  
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      {/* <TrustedBrands /> */}
    </div>
  );
};

export default HomePage;