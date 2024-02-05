import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "User name",
                    type: "text",
                    placeholder: "enter your name"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "enter password"

                }
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: "keerthi", password: "password" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}