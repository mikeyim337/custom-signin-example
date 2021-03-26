


import SignInForm from "../components/SignInForm";
import { providers } from 'next-auth/client';
import styles from '../styles/Home.module.css';


const Signin = ({providers}) => {
   

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