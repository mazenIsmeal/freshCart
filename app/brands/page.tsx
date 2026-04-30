import { getAllBrands } from "@/services/brand.service";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaTags } from "react-icons/fa";

export interface Root {
  results: number
  metadata: Metadata
  data: BrandData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface BrandData {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}


export default async function Brands() {
    const { data } = await getAllBrands();

    return (
        <>
            {/* bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 */}
            <div
                className="bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white"
            >
                <div className="container mx-auto px-4 py-12 sm:py-16">
                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                        <Link className="hover:text-white transition-colors" href="/">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white font-medium">Brands</span>
                    </nav>
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                            <FaTags className="text-xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                Top Brands
                            </h1>
                            <p className="text-white/80 mt-1">
                                Shop from your favorite brands
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 my-5">
                {data.map((brand: BrandData) => (
                    <Link key={brand._id}
                        className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                        href={`/products/brands/${brand._id}`}
                    >
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                            <img
                                alt="Canon"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                src={brand.image}
                            />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                            {brand.name}
                        </h3>
                        <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-violet-600 flex items-center gap-1">
                                View Products
                                <FaArrowRight />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
