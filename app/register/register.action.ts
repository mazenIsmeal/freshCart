"use server";
import {  RegisterAuth, ResRegister } from "@/Interfaces/auth.interface";
import { cookies } from "next/headers";

export async function register(values: RegisterAuth) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data:ResRegister = await res.json();
    console.log(data)
    if(data.message === 'success'){
        const cookie = await cookies();
        cookie.set('token', data.token, {
            httpOnly: true,
            secure:true
        });
        return true;
    } else {
        return data.message
    }
}