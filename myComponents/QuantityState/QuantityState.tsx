'use client'
import { Product } from '@/Interfaces/products.interface'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import AddProductDetailsToCartAndToWishlist from '../AddProductDetailsToCartAndToWishlist/AddProductDetailsToCartAndToWishlist';

export default function QuantityState({ data }: { data: Product }) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < data.quantity) {
            setQuantity(prev => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const totalPrice = data.price * quantity;
    // console.log(quantity);

    return <>
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
            </label>
            <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                        id="decrease-qty"
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                        onClick={handleDecrease}
                        disabled={quantity === 1}
                    >
                        <FaMinus />
                    </button>
                    <input
                        min={1}
                        max={220}
                        className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        id="quantity"
                        type="number"
                    />
                    <button
                        id="increase-qty"
                        onClick={handleIncrease}
                        disabled={quantity === data.quantity}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                    >
                        <FaPlus />
                    </button>
                </div>
                <span className="text-sm text-gray-500">{data.quantity} available</span>
            </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Price:</span>
                <span className="text-2xl font-bold text-primary-600">
                    {totalPrice} EGP
                </span>
            </div>
        </div>
        <AddProductDetailsToCartAndToWishlist id={data.id} quantity={quantity} />
    </>
}
