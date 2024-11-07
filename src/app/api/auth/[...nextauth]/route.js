// export const dynamic = 'force-static'; // Ensure static rendering
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy : 'jwt',
        maaxAge: 30 * 24 * 60 * 60,
    },
    providers : [
        CredentialsProvider({
            credentials:{
                email: {label: "Email", type: "text", required: true, placeholder:"Your Email"},
                password: {label: "Password", type: "password", required: true, placeholder:"Your Password"},
            },
            async authorize(credentials){
                const {email, password} = credentials;
                if(!credentials){
                    return null
                }
                if(email){
                    const currentUser = users.find((user) => user.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }
                    }
                }
                return null;
            }
        })
    ],

    callbacks :{
        
          async jwt({ token, user, account }) {
            if(account){
                token.type = user.type
            }
            return token
          },
          async session({ session, token }) {
            session.user.type =token.type
            return session
          }
    }
}
const handler = NextAuth(authOptions);

const users = [
    {
        id: 1,
        name: "shahriar",
        email: "asq@gmail.com",
        password: "password",
        type: "admin"
    },
    {
        id: 2,
        name: "reza",
        email: "as@gmail.com",
        password: "password",
        type: "admin"
    },
    {
        id: 3,
        name: "shakil",
        email: "sq@gmail.com",
        password: "password",
        type: "admin"
    },
]

export {handler as GET, handler as POST}