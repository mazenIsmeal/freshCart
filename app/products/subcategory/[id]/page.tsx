import { getAllWishlistProducts } from "@/app/wishlist/wishlist.action";
import { Product } from "@/Interfaces/products.interface";
import ProductCard from "@/myComponents/ProductCard/ProductCard";
import { getProductDataSubcategory } from "@/services/allProducts.service";
import {
    getSubcategoryById,
} from "@/services/category.service";
import Link from "next/link";
import { FaBoxOpen, FaFilter, FaFolderOpen } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

type Params = {
  id: string;
};

export default async function page({ params }: {params: Params}) {
    const { id } = await params;
    console.log(id);

    const { data } = await getProductDataSubcategory(id);

    const subId = await getSubcategoryById(id);

    const wishlist = await getAllWishlistProducts();
    
    const wishlistIds = wishlist.data.map((item: any) => item.id);

    return (
        <>
            <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
                <div className="container mx-auto px-4 py-12 sm:py-16">
                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                        <Link className="hover:text-white transition-colors" href="/">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <Link
                            className="hover:text-white transition-colors"
                            href="/category"
                        >
                            Categories
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white font-medium">{subId.data.name}</span>
                    </nav>
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
                            <FaFolderOpen />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                {subId.data.name}
                            </h1>
                            <p className="text-white/80 mt-1">
                                Choose a subcategory to browse products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                    <FaFilter />
                    Active Filters:
                </span>
                <Link
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-200 transition-colors"
                    href="/products"
                >
                    <FaFolderOpen />
                    Computer Components
                    <FaXmark />
                </Link>
                <Link
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                    href="/products"
                >
                    Clear all
                </Link>
            </div>
            <p className="mb-6 text-sm text-gray-500">
                Showing {data.length} product
            </p>
            {data.length === 0 ? (
                <>
                    <div className="text-center my-20">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                            <FaBoxOpen className="text-3xl text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            No Products Found
                        </h3>
                        <p className="text-gray-500 mb-6">
                            No products match your current filters.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                            href="/products"
                        >
                            View All Products
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
                        {data.map((product: Product) => (
                            <ProductCard product={product} key={product._id} wishlistIds={wishlistIds} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
