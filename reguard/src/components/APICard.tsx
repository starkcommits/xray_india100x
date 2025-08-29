import React from 'react';
import { ExternalLink, Clock, Target } from 'lucide-react';

interface APICardProps {
  id?: string;
  category?: string;
  name: string;
  description: string;
  responseTime: string;
  accuracy: string;
  categoryLabel?: string;
  isPopular?: boolean;
  linkTo?: string;
  onClick?: () => void;
}

export const APICard: React.FC<APICardProps> = ({
  id,
  category,
  name,
  description,
  responseTime,
  accuracy,
  categoryLabel,
  isPopular = false,
  linkTo,
  onClick,
}) => {
  const CardContent = () => (
    <div 
      className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg hover:border-red-200 transition-all duration-300 relative h-full cursor-pointer"
      onClick={onClick}
    >
      {isPopular && (
        <div className="absolute -top-1.5 right-2">
          <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            Popular
          </span>
        </div>
      )}
      
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors pr-2">
            {name}
          </h3>
          {categoryLabel && (
            <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded text-nowrap">
              {categoryLabel}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{description}</p>
      </div>

      <div className="flex items-center space-x-3 mb-3 text-xs">
        <div className="flex items-center space-x-1 text-gray-600">
          <Clock size={12} />
          <span>{responseTime}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <Target size={12} />
          <span>{accuracy}</span>
        </div>
      </div>

      <div className="flex space-x-2 mt-auto">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-1.5 px-3 rounded text-xs font-medium transition-colors"
        >
          Try API
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="flex items-center justify-center border border-gray-300 hover:border-red-300 hover:text-red-600 text-gray-600 py-1.5 px-2 rounded text-xs transition-colors"
        >
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );

  return <CardContent />;
};