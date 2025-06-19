// components/FeatureItem.tsx
import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start text-start gap-4">
      <div className="bg-green-200 rounded-full p-3 h-14 w-14 flex items-center justify-center text-teal-800">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg my-2">{title}</h4>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
