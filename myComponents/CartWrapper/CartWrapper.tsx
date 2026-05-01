import { Product } from '@/Interfaces/cart.interface'
import React from 'react'
import CartItem from '../CartItem/CartItem'
import Link from 'next/link'
import TotalCart from '../TotalCart/TotalCart'
import ClearAllItemCart from '../ClearAllItemCart/ClearAllItemCart'

export default function CartWrapper({
    products = [],
    numOfCartItems,
    totalCartPrice,
    cartId
}: {
    products?: Product[],
    numOfCartItems: number,
    totalCartPrice: number,
    cartId: string
}) {
    


    if (!products || products.length === 0) {
        return (
            <div className="text-center my-10">
                <p className='font-bold text-lg mb-4'>
                    Your cart is empty 🛒
                </p>

                <Link href='/products' className="text-green-600 text-lg">
                    Go Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className="lg:col-span-2">
                {products?.map((product: any) => (
                    <CartItem product={product} key={product._id} />
                ))}

                <div className="flex items-center justify-between mt-6">
                    <Link href='/products' className="text-green-600 text-xl">
                        Continue Shopping
                    </Link>

                    <ClearAllItemCart />
                </div>
            </div>

            <div className="lg:col-span-1">
                <TotalCart
                    numOfCartItems={numOfCartItems}
                    cartId={cartId}
                    totalCartPrice={totalCartPrice}
                />
            </div>
        </div>
    );
}
