import { Product } from "@/Interfaces/getCartLogged.interface";
import React from "react";
import { FaBox, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import OrderBtn from "../OrderBtn/OrderBtn";

export default function OrderSummary({ products, totalCartPrice, paymentMethod }: { products: Product[], totalCartPrice: number, paymentMethod: 'cash' | 'online'  }) {
    return (
        <>
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <FaBagShopping />
                            Order Summary
                        </h2>
                        <p className="text-primary-100 text-sm mt-1">{products.length} items</p>
                    </div>
                    <div className="p-5">
                        <div className="space-y-3 max-h-56 overflow-y-scroll mb-5 pr-1" style={{ overflow: 'auto', height: '224px' }}>
                            {products.map((item) =>
                                <div key={item._id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                                        <img
                                            alt="Woman Shawl"
                                            className="w-full h-full object-contain"
                                            src={item.product.imageCover}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {item.product.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.count} × {item.price} EGP</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 shrink-0">{item.count * item.price}</p>
                                </div>
                            )}

                        </div>
                        <hr className="border-gray-100 my-4" />
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium">{totalCartPrice} EGP</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span className="flex items-center gap-2">
                                    <FaTruck className="text-gray-500" />
                                    Shipping
                                </span>
                                <span className="text-green-600 font-semibold">FREE</span>
                            </div>
                            <hr className="border-gray-100" />
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-primary-600">
                                        {totalCartPrice}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-1">EGP</span>
                                </div>
                            </div>
                        </div>
                        <OrderBtn paymentMethod={paymentMethod} />
                        <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <FaShieldAlt className="text-green-500" />
                                <span>Secure</span>
                            </div>
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <FaTruck className="text-blue-500" />
                                <span>Fast Delivery</span>
                            </div>
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <FaBox className="text-orange-500" />
                                <span>Easy Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
