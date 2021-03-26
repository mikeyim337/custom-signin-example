import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signOut, useSession } from 'next-auth/client';

export default function Home() {
   const [ session, loading ] = useSession()

   if(loading) return null

   console.log("SESSION: ", session);

  return (
    <div className={styles.container}>
      <Head>
        <title>Custom signin test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!loading && !session && <h2>NOT SIGNED IN</h2>}
        {session && <h2>{session.user.email} SIGNED IN</h2>}
        
        <div className={styles.grid}>
          

          <a href="/signin" className={styles.card}>
            <h3>Custom SignIn</h3>
          </a>

          <a href="" onClick={() => signOut()} className={styles.card}>
            <h3>Sign Out</h3>
          </a>


         
        </div>
      </main>

     
    </div>
  )
}
