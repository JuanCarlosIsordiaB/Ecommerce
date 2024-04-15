
import NextAuth,  {type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcryptjs from "bcryptjs";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          console.log(parsedCredentials.success)

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        //Buscar el corre
        const user = await prisma.user.findUnique({where: {email: email.toLowerCase()}});

        if(!user) return null; //Si no existe el usuario

        if(!bcryptjs.compareSync(password, user.password)) return null; //Si la contraseña no es correcta

        const {password: _, ...rest} = user; //Extraemos la contraseña del usuario

        console.log({rest});
        
        return rest;
      },
    }),
  ],
};

export const { signIn , auth} = NextAuth(authConfig);
