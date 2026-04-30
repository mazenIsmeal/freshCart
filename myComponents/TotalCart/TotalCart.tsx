import { Product } from "@/Interfaces/getCartLogged.interface";
import Link from "next/link";
import React from "react";
import { CiUnlock } from "react-icons/ci";
import { FaShieldAlt, FaTag, FaTruck } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

export default function TotalCart({
    totalCartPrice,
    numOfCartItems,
    cartId
}: {
    totalCartPrice: number;
    numOfCartItems: number;
    cartId: string;
}) {
    const pricePar = Math.min(Math.max((totalCartPrice / 500) * 100, 0), 100);

    return (
        <>
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <IoBag />
                            Order Summary
                        </h2>
                        <p className="text-primary-100 text-sm mt-1">
                            {numOfCartItems} item in your cart
                        </p>
                    </div>
                    <div className="p-6 space-y-5">
                        {totalCartPrice >= 500 ? (
                            <>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg
                                            data-prefix="fas"
                                            data-icon="truck"
                                            className="svg-inline--fa fa-truck text-green-600"
                                            role="img"
                                            viewBox="0 0 576 512"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-700">
                                            Free Shipping!
                                        </p>
                                        <p className="text-sm text-green-600">
                                            You qualify for free delivery
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaTruck className="text-orange-500" />
                                        <span className="text-sm font-medium text-gray-700">
                                            Add {500 - totalCartPrice} EGP for free shipping
                                        </span>
                                    </div>
                                    <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                                            style={{ width: `${pricePar}%` }}
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-900">
                                    {totalCartPrice} EGP
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="font-medium text-gray-900">50 EGP</span>
                            </div>
                            <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-gray-900 font-semibold">Total</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-gray-900">
                                            {totalCartPrice < 500
                                                ? totalCartPrice + 50
                                                : totalCartPrice}
                                        </span>
                                        <span className="text-sm text-gray-500 ml-1">EGP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50 transition-all">
                            <FaTag />
                            <span className="text-sm font-medium">Apply Promo Code</span>
                        </button>
                        <Link
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                            href={`/cart/cheekOut/${cartId}`}
                        >
                            <CiUnlock />
                            <span>Secure Checkout</span>
                        </Link>
                        <div className="flex items-center justify-center gap-4 py-2">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <FaShieldAlt className="text-green-500" />
                                <span>Secure Payment</span>
                            </div>
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <FaTruck className="text-blue-500" />
                                <span>Fast Delivery</span>
                            </div>
                        </div>
                        <a
                            className="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium py-2"
                            href="/"
                        >
                            ← Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
