'use server'

import { getUserDataFromToken } from "@/lib/getUserToken";
import { revalidatePath } from "next/cache";

// Add Product Wishlist item
export async function addWishlist(productId: string) {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
        method: 'POST',
        body: JSON.stringify({productId}),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    if (!res.ok) {
    throw new Error(data.message || 'Error adding wishlist')
}
return data
}

// Get Product Wishlist item
export async function getAllWishlistProducts() {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: {
            token: accessToken as string
        }
    })
    const data = res.json();
//     if (!res.ok) {
//     throw new Error('Error fetching wishlist');
//   }
    return data;
}

// Remove Product Wishlist item
export async function removeProductWishlist(id:string) {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json()
    console.log(data);
    if(data.status = 'success') {
            revalidatePath('/wishlist');
        }
    return true;
}