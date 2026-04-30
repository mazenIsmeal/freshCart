import React from 'react'

export default function loading() {
  return <>
  <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="relative">
          <div className="w-14 h-14 border-4 border-gray-200 rounded-full"></div>
          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>

        {/* Text */}
        <p className="text-gray-500 text-sm font-medium">
          Loading ...
        </p>
      </div>
    </div>
  </>
}
