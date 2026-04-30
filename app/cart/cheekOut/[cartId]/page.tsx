import DetailsCheekOut from '@/myComponents/DetailsCheekOut/DetailsCheekOut'
import OrderSummary from '@/myComponents/OrderSummary/OrderSummary'
import Link from 'next/link'
import React from 'react'
import { FaReceipt } from 'react-icons/fa'
import { getDataCart } from '../../cart.action'
import OrderWrapper from '@/myComponents/OrderWrapper/OrderWrapper'

export default async function CheekOut() {
    const resultGetDataCart = await getDataCart();
    const { cartId, numOfCartItems, data: { totalCartPrice, products } } = resultGetDataCart;
    return <>
        <div className="container">
            <nav className="flex items-center gap-2 text-sm my-6">
                <Link href="/">
                    Home
                </Link>
                <span className="">/</span>
                <Link href="/cart">
                    Cart
                </Link>
                <span className="">/</span>
                <span className="text-black font-medium">Checkout</span>
            </nav>
        </div>

        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-2xl">
                    <div className="size-10 flex items-center justify-center bg-green-100">
                        <FaReceipt />
                    </div>
                    <h2 className='text-2xl font-bold text-black'>Complete Your Order</h2>
                </div>
                <Link href='/cart' className='text-green-600 text-xl'>Back to Cart</Link>
            </div>
            <p className='text-gray-500 my-2 font-bold'>Review your items and complete your purchase</p>
        </div>

        <div className="container">
            <div className="">
                <OrderWrapper products={products} totalCartPrice={totalCartPrice} />

            </div>
        </div>


    </>
}
