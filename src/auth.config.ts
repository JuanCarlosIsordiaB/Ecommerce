import NextAuth,  {type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        //Buscar el corre
        console.log("Auth Config");
        console.log({ email, password });

        //Comparar las contraseñas

        //Regresar el usuario

        return null;
      },
    }),
  ],
};

export const { signIn , auth} = NextAuth(authConfig);
