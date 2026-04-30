'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Product } from '@/Interfaces/products.interface';
import ProductCard from '../ProductCard/ProductCard';
import { useRef } from 'react';
import { getAllWishlistProducts } from '@/app/wishlist/wishlist.action';

export default function SliderCategory({ data }: { data: Product[] }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    async function test() {
        const wishlist = await getAllWishlistProducts();
        
        const wishlistId = wishlist.data.map((item: any) => item.id);
        return wishlistId;
    }

    const wishlistIds = test()

    return (
        <div className="relative">

            {/* 🔥 arrows فوق يمين */}
            <div className="absolute -top-10 right-0 z-10 flex gap-2">
                <button ref={prevRef} className="bg-gray-200 p-2 rounded-full">
                    ←
                </button>
                <button ref={nextRef} className="bg-gray-200 p-2 rounded-full">
                    →
                </button>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={20}
                onBeforeInit={(swiper) => {
                    // 💥 هنا الحل
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className="w-full"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map((product) => (
                    <SwiperSlide key={product._id}>
                        <ProductCard product={product} key={product._id} wishlistIds={wishlistIds} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}