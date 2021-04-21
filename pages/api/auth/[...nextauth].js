import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.GitHub({
      clientId: process.env.GITGUB_CLIENT_ID,
      clientSecret: process.env.GITGUB_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  // Optional SQL or MongoDB database to persist users
  //database: process.env.DATABASE_URL,
});
