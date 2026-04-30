"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          position: "relative",
        }as React.CSSProperties}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg "
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
          <div
            
            className="h-[400px] flex items-center justify-center bg-image"
          >
            <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
              <div className="container h-full content-center">
                <h2
                  className="text-white text-3xl font-bold mb-4 max-w-96"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Fresh Products Delivered to your Door
                </h2>
                <p style={{ opacity: 1, transform: "none" }}>
                  Get 20% off your first order
                </p>
                <div className="mt-4" style={{ opacity: 1, transform: "none" }}>
                  <Link
                    className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/products"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/deals"
                  >
                    View Deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-image bg-linear-to-r from-green-500/90 to-green-400/50">
          <div
            
            className="h-[400px] flex items-center justify-center bg-image"
          >
            <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
              <div className="container h-full content-center">
                <h2
                  className="text-white text-3xl font-bold mb-4 max-w-96"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Fresh Products Delivered to your Door
                </h2>
                <p style={{ opacity: 1, transform: "none" }}>
                  Get 20% off your first order
                </p>
                <div className="mt-4" style={{ opacity: 1, transform: "none" }}>
                  <Link
                    className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/products"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/deals"
                  >
                    View Deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-image bg-linear-to-r from-green-500/90 to-green-400/50">
          <div
            
            className="h-[400px] flex items-center justify-center bg-image"
          >
            <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
              <div className="container h-full content-center">
                <h2
                  className="text-white text-3xl font-bold mb-4 max-w-96"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Fresh Products Delivered to your Door
                </h2>
                <p style={{ opacity: 1, transform: "none" }}>
                  Get 20% off your first order
                </p>
                <div className="mt-4" style={{ opacity: 1, transform: "none" }}>
                  <Link
                    className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/products"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                    href="/deals"
                  >
                    View Deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
