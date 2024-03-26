import {Sora } from 'next/font/google';
//font settings 
const sora = Sora({ subsets: ['latin'], variable:'--font-sora',weight:['100','200','300','400','500','600','700','800'], });
import Nav from '../components/Nav';
import Header from './Header';
import TopLeftimg from './TopLeftimg';

export function Layout ({children}) {
    return <div className={`page bg-[#011936] text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
 <TopLeftimg/>
        <Nav/>
        <Header/>
       
        {children}
       
    </div>;
  };
  

  