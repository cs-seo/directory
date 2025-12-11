import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              href="/" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-gray-400 mx-2">/</span>
              {item.href && index < items.length - 1 ? (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};