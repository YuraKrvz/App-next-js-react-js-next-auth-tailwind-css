// import NextAuth from "next-auth"
// import CredentialProvider from 'next-auth/providers/credentials'
//
// export default NextAuth({
//     providers: [
//         CredentialProvider({
//             name: 'credentials',
//             credentials: {
//                 username: {
//                     label: 'Email',
//                     type: 'text',
//                     placeholder: 'guest@guest.com'
//                 },
//                 password: {
//                     label: 'Password',
//                     type: 'password',
//                     placeholder: 'password'
//                 },
//                 authorize: (credentials)=> {
//                     if(credentials.username === 'guest' && credentials.password === 'guest'){
//                         return {
//                             id: 2,
//                             name: 'guest',
//                             email: 'guest@guest.com',
//                         }
//                     }
//                     return null
//                 },
//             }
//         }),
//     ],
//     callbacks: {
//         jwt: async ({token, user}) => {
//             if(user){
//                 token.id = user.id
//             }
//             return token
//         },
//         session: ({session, token })=> {
//             if(token){
//                 session.id = token.id
//             }
//             return session
//         },
//     },
//     secret: 'guest',
//     jwt: {
//         secret: 'guest',
//         encryption: true,
//     }
// })
//#2

import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})
