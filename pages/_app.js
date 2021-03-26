import '../styles/globals.css'
import { SWRConfig } from 'swr';
import api from "../services/api";
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return <>
   <SWRConfig value={{fetcher: (url) => api(url).then(r => r.data)}}>
       <Provider session={pageProps.session}>
          <Component {...pageProps} />

       </Provider>

   </SWRConfig>
  </>
}

export default MyApp
