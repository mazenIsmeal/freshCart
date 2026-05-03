'use server'

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getDecodedUserToken() {
//     const cookie = await cookies()
//     const token = cookie.get('next-auth.session-token')?.value;
//     const decodedToken = await decode({token: token, secret: process.env.AUTH_SECRET as string})
//     return decodedToken?.accessToken;
// }

// export async function getUserDataFromToken() {
//     const cookieStore = await cookies()
//     const token = cookieStore.get('next-auth.session-token')?.value;

//     const decodedToken = await decode({
//         token,
//         secret: process.env.AUTH_SECRET as string
//     });

//     return {
//         accessToken: decodedToken?.accessToken,
//         userId: decodedToken?.userId
//     };
// }

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "./nextAuth/nextAuthConifg";

export async function getUserDataFromToken() {
  const session = await getServerSession(nextAuthConfig);

  return {
    accessToken: session?.accessToken || null,
    user: session?.user || null,
  };
}