import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      username: { label: "Username", type: "text", placeholder: "admin" },
      password: { label: "Password", type: "password" },
    }),
  ],
  authorize: (credentials) => {
    if (credentials.username === "admin" && credentials.password === "test") {
      return {
        id: 2,
        name: "Praise",
        email: "admin@testing.com",
      };
    }
    return null;
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
});
