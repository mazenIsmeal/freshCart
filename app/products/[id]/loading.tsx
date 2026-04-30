import SliderSkeleton from '@/myComponents/SliderSkeleton/SliderSkeleton'
import React from 'react'

export default function loadingDetails() {
  return <>
    <SliderSkeleton />
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  </>
}
