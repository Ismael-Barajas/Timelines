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
  session: { jwt: true },
  callbacks: {
    // async signIn(user, account, metadata) {
    //   if (account.provider === "github") {
    //     const githubUser = {
    //       id: metadata.id,
    //       login: metadata.login,
    //       name: metadata.name,
    //       avatar: user.image,
    //     };
    //     user.accessToken = await getTokenFromYourAPIServer(
    //       "github",
    //       githubUser
    //     );
    //     return true;
    //   }
    //   return false;
    // },
    // async jwt(token, user) {
    //   // Add access_token to the token right after signin
    //   if (user) {
    //     token = { accessToken: user.accessToken };
    //   }
    //   return token;
    // },
    // async session(session, token) {
    //   // Add property to session, like an access_token from a provider.
    //   session.accessToken = token.accessToken;
    //   return session;
    // },
    jwt: async (token, user, account, profile, isNewUser) => {
      console.log("here");
      console.log(token);
      console.log(user);
      const isSignIn = user ? true : false;
      // Add auth_time to token on signin in
      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000);
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      console.log("here2");
      console.log(token);
      console.log(session);
      if (!session?.user || !token?.account) {
        return session;
      }

      session.user.id = token.account.id;
      session.accessToken = token.account.accessToken;

      return session;
    },
  },
  // Optional SQL or MongoDB database to persist users
  //database: process.env.DATABASE_URL,
});
