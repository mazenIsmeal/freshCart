'use server'

import { ValuesPassword } from "./page";


export async function forgetPassword(values: ValuesPassword) {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    console.log(data)
    return data;
}

export async function verifyResetCode(values: ValuesPassword) {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    console.log(data)
    return data;
}

export async function resetPassword(values: ValuesPassword) {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    console.log(data)
    return data;
}