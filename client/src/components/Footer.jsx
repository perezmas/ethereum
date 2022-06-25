import logo from '../../images/logo.png';


const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32"/>
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <a href="#welcome" className="text-black text-base text-center mx-2 cursor-pointer">Welcome</a>
                    <a href="#exchange" className="text-black text-base text-center mx-2 cursor-pointer">Exchange</a>
                    <a href="#services" className="text-black text-base text-center mx-2 cursor-pointer">Services</a>
                    <a href="#transactions" className="text-black text-base text-center mx-2 cursor-pointer">Transactions</a>
                </div>
            </div>
                <div className="flex justify-center items-center flex-col mt-5">
                    <p className="text-black text-sm text-center">Come Join Us</p>
                </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-black text-sm text-center">Maximilian Perez-Mas</p>
                <p className="text-black text-sm text-center">All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;