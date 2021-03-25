

import { useState } from 'react';

import { signIn } from 'next-auth/client'



const Signin = () => {
    const [email, setEmail] = useState('');
    const handleOnChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    return ( <div>
        
      

              <div>
                <input
             
                  type="text"
                  name="email"
                  placeholder="Email"
                  id='email'
                  onChange={handleOnChange}
                 
                  />
           
              </div>

             
                <button onClick={() => signIn('email', { email, callbackUrl: '/' } )}>Sign in</button>
            







           
      
      </div>  );
}


export default Signin;