import { signIn } from 'next-auth/client'
import { useState } from 'react';

const SignInForm = ({providers}) => {
    const [email, setEmail] = useState('');
    const handleOnChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    return (   <> 
    
           <form>
                <input
             
                  type="text"
                  name="email"
                  placeholder="Email"
                  id='email'
                  onChange={handleOnChange}
                 
                  />
           
          
             
                <button onClick={() => signIn('email', { email, callbackUrl: '/'} )}>Sign in</button>
                <button onClick={() => signIn('facebook', {callbackUrl: '/'})}>
                
                  Sign in with {Object.values(providers)[1].name}</button>


           </form>
        </>
 );
}
 
export default SignInForm;