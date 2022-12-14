const Header = () => {
    return(
        <div className='w-screen h-[80px] z-10 drop-shadow-lg'>
        <nav className=" flex fixed w-screen justify-center items-center text-center mb-20 mt-5">
            <div className=" justify-items-start ">
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-white items-start'>Dorry</h1>
            </div>
            
            <div className="mx-12">
                <ul className='hidden md:flex justify-center  text-white'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Learn</li>
                    <li>Corporate</li>
                    <li>News</li>
                </ul>
            </div>
            
            <div>
                <button className='px-8 py-3 bg-green-800 text-white rounded-full' >Contact Us</button>
            </div>
        </nav>
      </div>


    )
}

export default Header;