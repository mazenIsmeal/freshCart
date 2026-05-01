'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';
import { Product } from './../../Interfaces/products.interface';

export default function SliderProductDetails({ images }: { images: string[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {/* Main Slider */}
            <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {images?.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[400px]">
                            <Image
                                src={img}
                                alt={`product-${index}`}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper mt-3"
            >
                {images?.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => setActiveIndex(index)}
                            className={`relative w-full h-[100px] cursor-pointer rounded-md border-2 ${activeIndex === index ? 'border-green-600' : 'border-transparent'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`thumb-${index}`}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}