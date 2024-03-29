import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image'
import logo from '../../../public/logo/ops.png'
import Link from 'next/link'
function Navani() {
    const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Technology' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Solutions' },
    // { id: 5, text: 'Impact Stories' },
    { id: 6, text: 'Industry' },
    { id: 7, text: 'ResponsibleAI' },

  ];
  return (
    <>
       <div className='fixed bg-slate-200 flex justify-between items-center md:h-24 max-w-full  w-full px-8 md:mt-4 mr-4 text-slate-900 z-30 '>
      {/* Logo */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <div className="mx-2 my-4 ">
             {/* <ion-icon name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600"></ion-icon> */}
             <Link href='/'><Image
      src={logo}
      width={150}
      height={150}
      alt="Picture of the author"
    /></Link>
         </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link href={`/${item.text}`}>{item.text}</Link>
            
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-16 w-[50%] h-full  bg-slate-200 ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        <div className="mx-2 my-4 ">
             {/* <ion-icon name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600"></ion-icon> */}
             {/* <Image
      src="/logo/ops.png"
      width={150}
      height={150}
      alt="Picture of the author"
    /> */}
         </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link href={`/${item.text}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Navani;
