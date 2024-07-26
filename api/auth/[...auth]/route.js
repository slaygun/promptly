import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { connecToDB } from "@/utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })
    ],
    async session({ session }){

    },
    async signIn({ profile }){
        try {
            await connecToDB();

            return true;
        }   catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST }
