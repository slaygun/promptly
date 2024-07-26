import GoogleProvider from "next-auth/providers/google";
import { connecToDB } from "@/utils/database";
import User from "@/models/user";
import { getServerSession } from "next-auth";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }) {
    try {
      await connecToDB();
      //user exists?
      const userExists = await User.findOne({
        email: profile.email,
      });
      //if not create new
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

// NOTE: Only for use in server
export const getServerAuthSession = () => getServerSession(authOptions);
