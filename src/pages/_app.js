import { Layout } from '../components/Layout';
import Transition from '../components/Transition';
import '../app/globals.css';
import { useRouter} from 'next/router';
import { AnimatePresence , motion } from 'framer-motion';
import GoogleAnalytics from '@/components/GoogleAnalytics';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <GoogleAnalytics />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
        <Component {...pageProps} />
        </motion.div>
    
      </AnimatePresence>
    
    </Layout>
  );
}

export default MyApp;