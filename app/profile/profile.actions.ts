'use server'

import { getUserDataFromToken } from "@/lib/getUserToken";
import { ValuesAddress } from "@/myComponents/AddAddress/AddAddress";
import { ValuesData } from "./settings/page";
import { PasswordChangeValues } from "@/myComponents/ChangePassword/ChangePassword";

export async function addAddress(values: ValuesAddress) {
    const { accessToken } = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/addresses', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    console.log(data);
    return data;
    
}

export async function getDataAddress() {
    const { accessToken } = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/addresses', {
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json();
    console.log(data);
    return data
}

// update data user 
export async function updateDataUser(values: ValuesData) {
    const { accessToken } = await getUserDataFromToken();
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/updateMe/', {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            token: accessToken as string
        }
    })
    const data = await res.json();
    console.log(data);
}

// change Password
export async function changePasswordRes(values: PasswordChangeValues) {
    const { accessToken } = await getUserDataFromToken();
    console.log(values);
    
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            token: accessToken as string,
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();
    console.log(data);

    return res.ok; // أحسن من return true
}