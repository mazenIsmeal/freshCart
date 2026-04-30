'use client'
import Skeleton from 'react-loading-skeleton';

export default function SliderSkeleton() {
    return (
        <div>
            {/* Main Image */}
            <Skeleton height={400} borderRadius={12} />

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-3">
                {[1, 2, 3, 4].map((_, index) => (
                    <Skeleton key={index} height={100} borderRadius={8} />
                ))}
            </div>
        </div>
    );
}