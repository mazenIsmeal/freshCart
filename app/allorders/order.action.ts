'use server'

import { getUserDataFromToken } from "@/lib/getUserToken";

export async function getAllOrder(userId: string) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getUserId() {
    const { accessToken } = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyToken', {
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json();
    console.log(data.decoded.id, 'userId with order action');
    return data
}