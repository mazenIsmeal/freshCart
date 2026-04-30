import { Product } from '@/Interfaces/products.interface'
import { getAllProducts } from '@/services/allProducts.service'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getAllWishlistProducts } from '@/app/wishlist/wishlist.action';

export default async function ProductWrapper() {
    let products: Product[] = [];

      const wishlist = await getAllWishlistProducts();

const wishlistIds = wishlist.data.map((item: any) => item.id);

    try {
        const productData = await getAllProducts();
        products = productData?.data || [];
    } catch (error) {
        console.log("API Error:", error);
    }

    return (
        <section className="py-10">
            <div className="container">

                <h2 className="text-2xl font-bold mb-4">
                    Featured Products
                </h2>

                <span className="text-sm text-gray-500">
                    Showing {products.length} products
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                    {products.length === 0 ? (
                        // 🔥 fallback (زي اللي إنت شايفه في مواقع كبيرة)
                        <>
                            <div className="col-span-full text-center py-10">
                                <p className="text-lg font-semibold">
                                    No products available now 👀
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Please check again later
                                </p>
                            </div>
                        </>
                    ) : (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} wishlistIds={wishlistIds} />
                        ))
                    )}

                </div>
            </div>
        </section>
    );
}
