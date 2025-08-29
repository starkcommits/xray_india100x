import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface APICategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  apiCount: number;
  isActive: boolean;
  onClick: () => void;
}

export const APICategory: React.FC<APICategoryProps> = ({
  icon: Icon,
  title,
  description,
  apiCount,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left p-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-red-50 text-red-700 border-l-3 border-red-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={`p-1.5 rounded-md transition-colors ${
          isActive ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-600'
        }`}>
          <Icon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium truncate">{title}</h3>
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
              isActive ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'
            }`}>
              {apiCount}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};