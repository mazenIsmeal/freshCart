import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const nextAuthConfig:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Submit',
            credentials: {
                email: {placeholder: 'enter your email', type: 'email', label: "Email"},
                password: {placeholder: 'enter your password', type: 'password', label: "Password"}
            },
            authorize: async (credentials) => {
                const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
                if(data.message === 'success' && data.user) {
                    return {
                        id: data.user.id,
                        email: data.user.email,
                        name: data.user.name,
                        accessToken: data.token,
                    }
                }
                return null;
            }
        })
    ],
    callbacks: {
        // احنا كده ضفينا ال token جواها ال object in cookie
        jwt: ({token, user}) => {
            if(user) {
                token.accessToken = (user as any).accessToken
                token.userId = user.id
            }
            return token;
        },
        async session({ session, token }) {
        session.accessToken = token.accessToken;
        return session;
    },
    },
    pages: {
        signIn: '/login'
    }

}