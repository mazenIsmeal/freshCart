import React from 'react'
import { getDataCart } from './cart.action'
import Link from 'next/link';
import { IoCart } from 'react-icons/io5';
import CartWrapper from '@/myComponents/CartWrapper/CartWrapper';

export default async function page() {

    let cartData = null;

    try {
        cartData = await getDataCart();
    } catch (error) {
        console.log("Cart API failed:", error);
    }

    const cartId = cartData?.cartId || "";
    const numOfCartItems = cartData?.numOfCartItems || 0;
    const products: any = cartData?.data?.products || [];
    const totalCartPrice = cartData?.data?.totalCartPrice || 0;

    return (
        <>
            <div className="container py-5">

                <nav className='flex items-center gap-2.5'>
                    <Link href='/'>Home</Link>
                    <span>/</span>
                    <span>Shopping Cart</span>
                </nav>

                <div className="flex items-center gap-3">
                    <div className='size-10 bg-green-500 rounded-2xl p-2'>
                        <IoCart className='text-2xl text-white' />
                    </div>
                    <h2 className='text-black text-2xl font-black'>
                        Shopping Cart
                    </h2>
                </div>

                <p className='text-gray-600 my-2.5 text-xl'>
                    You have{" "}
                    <span className='text-green-600'>
                        {numOfCartItems} items
                    </span>{" "}
                    in your cart
                </p>
            </div>

            <CartWrapper
                products={products}
                numOfCartItems={numOfCartItems}
                cartId={cartId}
                totalCartPrice={totalCartPrice}
            />
        </>
    );
}