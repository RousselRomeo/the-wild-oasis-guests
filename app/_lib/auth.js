import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.Auth_Google_ID,
      clientSecret: process.env.Auth_Google_SECRET,
    }),
  ],
  trustHost: true,
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
