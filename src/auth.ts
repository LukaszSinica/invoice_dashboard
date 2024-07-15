import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google
  ],
  callbacks: {
    async redirect() {
      return "/"
    },
    session({session, token, user}) {
      if(token.email == process.env.ADMIN_EMAIL) {
        return {
          ...session,
          user: {
            ...session.user,
            role: "admin"
          }
        }
      }
      return {
        ...session,
        user: {
          ...session.user,
          role: "user"
        }
      }
    },
  },

})