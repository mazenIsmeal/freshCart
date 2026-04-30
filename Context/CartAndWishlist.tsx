'use client'
import { getDataCart } from "@/app/cart/cart.action";
import { getAllWishlistProducts } from "@/app/wishlist/wishlist.action";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({});

export default function CartContextProvider({ children }: { children: React.ReactNode; }) {
    const [cartItem, setCartItem] = useState(0)
    const [wishlistItem, setWishlistItem] = useState(0)

    async function getCountCart() {
        try {
            const data = await getDataCart()
            setCartItem(data.numOfCartItems)
            console.log('context data cart => ', cartItem);
        } catch (error) {
            console.log(error);

        }
    }

    async function getCountWishlist() {
        try {
            const data = await getAllWishlistProducts()
            setWishlistItem(data.data.length)
            console.log('context data wishlist => ', wishlistItem);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getCountCart()
        getCountWishlist()
    }, [])

    return <>
        <CartContext.Provider value={{ cartItem, setCartItem, wishlistItem, setWishlistItem }}>
            {children}
        </CartContext.Provider>
    </>

}