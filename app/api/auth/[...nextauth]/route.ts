import { nextAuthConfig } from "@/lib/nextAuth/nextAuthConifg";
import NextAuth from "next-auth";

export const handler = NextAuth(nextAuthConfig);

export {handler as GET, handler as POST}