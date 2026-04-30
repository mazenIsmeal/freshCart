'use client'
import { addProductToCart } from '@/app/cart/cart.action'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/Context/CartAndWishlist';
import React, { useContext } from 'react'
import { toast } from 'sonner';

export default function AddProductToCartBtn({ productId }: { productId: string }) {
    const { cartItem, setCartItem } = useContext(CartContext)
    async function handelAddToCart() {
        const result = await addProductToCart(productId);
        if (result) {
            toast.success('Product Added to Cart')
            setCartItem(cartItem + 1)
        } else {
            toast.error('Some ting error pleas login or cheek your internet')
        }
    }
    return <>
        <Button className="rounded-full w-10 h-10 p-0 text-xl" onClick={handelAddToCart}>
            +
        </Button>
    </>
}
