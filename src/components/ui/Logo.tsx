import React from 'react';
import  FarmtowerLogo from './../../assets/favicon.png'
interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : `text-brown`;
  
  return (
    <div className="flex items-center">
      {/* <Plant size={32} className="text-primary-600 mr-2" /> */}
      <div>
        <img src={FarmtowerLogo} width={80} height={'auto'}/>
      </div>
      <div>
        <span className={` font-bold ${textColor} text-3xl`}>
          Farm<span className="text-primary-600 text-3xl">Tower</span>
        </span>
        <p className={`${textColor} text-[9px]`}>Empowering Healthy Farms with Innovation</p>
      </div>
      
    </div>
  );
};

export default Logo;