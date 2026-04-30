'use server'

import { CartRes } from "@/Interfaces/cart.interface";
import { CartData } from "@/Interfaces/getCartLogged.interface";
import { getUserDataFromToken } from "@/lib/getUserToken";
import { OrderCheekout } from "@/myComponents/DetailsCheekOut/DetailsCheekOut";
import { revalidatePath } from "next/cache";

// AddToCart
export async function addProductToCart(productId: string):Promise<Boolean> {
    const {accessToken} = await getUserDataFromToken()
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: 'POST',
        body: JSON.stringify({productId}),
        headers: {
            'Content-Type': 'application/json',
            token: accessToken as string
        }
    })

    const data:CartRes = await res.json();
    
    if(data.status === 'success') {
        return true
    }else {
        return false
    }

}

// getDataCart
export async function getDataCart():Promise<CartData> {
    const {accessToken} = await getUserDataFromToken()
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: {
            token: accessToken as string
        }
    })

    const data = await res.json();
    
    return data
}

// UpdateCountCart
export async function updateCountProductCart(id: string, count: number) {
    const {accessToken} = await getUserDataFromToken()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'PUT',
        body: JSON.stringify({count}),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    
    if(data.status = 'success') {
        revalidatePath('/cart');
    }
}

// Delet Item Cart
export async function deleteItemCart(id: string) {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json();
    if(data.status = 'success') {
        revalidatePath('/cart');
    }
    return data
}


// Delet All Item Cart
export async function deleteAllItemCart() {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: 'DELETE',
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json();
    if(data.status = 'success') {
        revalidatePath('/cart');
    }
}

// cheekout cash
export async function cashOrder(cartId:string, values: OrderCheekout) {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()
    console.log(data);
    
}

// cheekout vais
export async function vaisOrder(cartId:string, values: OrderCheekout) {
    const {accessToken} = await getUserDataFromToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()
    console.log(data);

    if(data.status === 'success') {
        return data.session.url;
    }
    
}