import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import GloryAgency from '../../assets/logo.jpg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for agricultural inputs and implements, serving farmers across Africa and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/tractors" className="text-gray-300 hover:text-white transition-colors">
                  Tractors & Equipment
                </Link>
              </li>
              <li>
                <Link to="/products/irrigation" className="text-gray-300 hover:text-white transition-colors">
                  Irrigation Systems
                </Link>
              </li>
              <li>
                <Link to="/products/seeds" className="text-gray-300 hover:text-white transition-colors">
                  Seeds & Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/products/tools" className="text-gray-300 hover:text-white transition-colors">
                  Hand Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="mr-3 flex-shrink-0 text-primary-400" />
                <span className="text-gray-300">Yaounde, Cameroon</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 flex-shrink-0 text-primary-400" />
                <span className="text-gray-300">+91 814 633 6058 </span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 flex-shrink-0 text-primary-400" />
                <span className="text-gray-300">info@farmtower.com</span>
              </li>
            </ul>
             {/* Powered by */}
          <div>
            <div className='mt-6'></div>
             <h4 className="text-lg font-semibold mb-4">Powered By</h4>
            <div className="mb-4 w-24 h-24 bg-slate-200 align-middle justify-center rounded-lg">
              <img alt='glory-agency logo' className='scale-100' src={GloryAgency} style={{borderRadius:100}} width={100} height={100}/>
            </div>
                       
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FarmTower. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;