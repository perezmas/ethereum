import React, {useState} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({title, classProps}) => {
    return (
        <a href={`#${title.toLowerCase()}`} className={`mx-4 cursor-pointer text-black ${classProps}`}>
            {title}
        </a>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="bg-[#fdfdfc] w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-80 cursor-pointer" id='#'/>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Welcome", "Exchange", "Services", "Transactions"].map( (item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
            {/*<li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
                </li>*/}
            </ul>
            <div className="text-black flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4 fontSize={28} className=" md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                    className = "z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md white-glassmorphism text-white animate-slide-n">
                        <li className="text-black text-xl w-full my-2">
                            <HiX onClick={ () => setToggleMenu(false)} />
                        </li>
                        {["Welcome", "Exchange", "Services", "Transactions"].map( (item, index) => (
                    <NavbarItem key={item + index} title={item} classProps="font-bold my-2 text-lg"/>
                ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;