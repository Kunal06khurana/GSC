import React from 'react';

const BlogSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col animate-pulse">
      <div className="p-6 flex-1">
        {/* Title */}
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        
        {/* Author and date */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        </div>
        
        {/* Content preview */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
        <div className="flex gap-1.5">
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
