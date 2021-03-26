import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'



const options = {
  providers: [

     Providers.Email({
        server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
            }
        },
        from: process.env.EMAIL_FROM
  }),

   Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      //state: false
    }),
   
   
  ],
  database: process.env.DATABASE_URL,


  pages: {
    signIn: '/signin',
    
  },
   callbacks: {
  /**
   * @param  {object} session      Session object
   * @param  {object} user         User object    (if using database sessions)
   *                               JSON Web Token (if not using database sessions)
   * @return {object}              Session that will be returned to the client 
   */
  session: async (session, user, sessionToken) => {

    session.user._id = user.id;
   
    
    return Promise.resolve(session)
  },
   
  redirect: async (url, baseUrl) => {
    return url.startsWith(baseUrl)
      ? Promise.resolve(url)
      : Promise.resolve(baseUrl)
  }, 
  

}

}

export default (req, res) => NextAuth(req, res, options)