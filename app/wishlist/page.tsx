import React from "react";
import { getAllWishlistProducts } from "./wishlist.action";
import Link from "next/link";
import { Product } from "@/Interfaces/products.interface";
import AddAndRemoveItemToWishlist from "@/myComponents/AddAndRemoveItemToWishlist/AddAndRemoveItemToWishlist";
import Image from "next/image";

export default async function page() {
  const { data } = await getAllWishlistProducts();
  console.log("from page comp wishlist", data);

  if (!data || !Array.isArray(data)) {
  return <div>Please Login</div>;
}

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>
          
          {
            data.map((item: Product) => <div key={item._id} className="divide-y divide-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
              <div className="md:col-span-6 flex items-center gap-4">
                <Link
                  className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                  href={`/products/${item._id}`}
                >
                  <Image
                    alt="Galaxy Buds 2 Graphite"
                    className="w-full h-full object-contain p-2"
                    src={item.imageCover}
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="min-w-0">
                  <Link
                    className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                    href={`/products/${item._id}`}
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm text-gray-400 mt-1">{item.category.name}</p>
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <span className="md:hidden text-sm text-gray-500">Price:</span>
                <div className="text-right md:text-center">
                  <div className="font-semibold text-gray-900">{item.price} EGP</div>
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-center">
                <span className="md:hidden text-sm text-gray-500 mr-2">
                  Status:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  In Stock
                </span>
              </div>
              
              <AddAndRemoveItemToWishlist id={item._id} />
            </div>
          </div>)
          }
        
          
        </div>
        <div className="mt-8 flex items-center justify-between">
          <Link
            className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
            href="/products"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}
