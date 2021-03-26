

import {useRouter} from "next/router"
import SignInForm from "../components/SignInForm";
import { useSession, providers } from 'next-auth/client';
import styles from '../styles/Home.module.css';


const Signin = ({providers}) => {
    const [ session, loading ] = useSession()
    const router = useRouter()

    if (typeof window !== 'undefined' && loading) return <div>Loading</div>

    if (session) {
        
        router.replace('/')
        return <div>Loading</div>
    }
   

    return ( <div className={styles["container"]}>
        
      

           

        <SignInForm providers={providers}/>



           
      
      </div>  );
}

Signin.getInitialProps = async (context) => {

  return {
    
    providers: await providers(context),
  
  }
}


export default Signin;