'use client'
import { addProductToCart, updateCountProductCart } from '@/app/cart/cart.action'
import { CartContext } from '@/Context/CartAndWishlist'
import React, { useContext } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaBolt, FaShareAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { toast } from 'sonner'

export default function AddProductDetailsToCartAndToWishlist({ id, quantity }: { id: string, quantity: number }) {
    const { cartItem, setCartItem } = useContext(CartContext)
    async function handelAddToCart() {
        const result = await addProductToCart(id);
        if (result) {
            toast.success('Product Added to Cart')
            setCartItem(cartItem + 1)
        } else {
            toast.error('Some ting error')
        }
        await updateCountProductCart(id, quantity)
    }
    // console.log(quantity);

    return <>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
                onClick={handelAddToCart}
                id="add-to-cart"
                className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600"
            >
                <FaCartShopping />
                Add to Cart
            </button>
            <button
                id="buy-now"
                className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
                <FaBolt />
                Buy Now
            </button>
        </div>
        <div className="flex gap-3 mb-6">
            <button
                id="wishlist-button"
                className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600"
            >
                <CiHeart />
                Add to Wishlist
            </button>
            <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
                <FaShareAlt />
            </button>
        </div>
    </>
}
