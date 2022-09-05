const Footer = () =>{
    return(
        
        <footer className="p-4 bg-green-800 sm:p-6 mt-12">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 mb-10 ">
                <div>
                    <h1 className='text-3xl font-bold  sm:text-4xl text-white '>Are you interested to work <br/> with us ?</h1>
                </div>
                <div className="ml-20 flex items-center">
                    <button className='px-8 py-2 mr-5 bg-white text-green-800 rounded-full' >Lets Chat !</button>
                    <button className='px-4 py-2 bg-green-800 text-white rounded-full border-2 border-white' > Schedule Meet</button>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="md:flex md:justify-between">
                
                
                <div className="mb-6 md:mb-0 text-left mt-12 ml-12 mr-12">
                        <h1 className='text-3xl font-bold  sm:text-4xl text-white '>Dorry</h1>
                        <p className="text-white mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit autem laudantium nihil consectetur a, ducimus quasi harum? Quidem, possimus a?</p>
                </div>

                <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
                    <div>
                        <h2 className="mb-6 ml-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="hover:underline text-slate-300">
                                Our work
                            </li>
                            <li className="hover:underline text-slate-300">
                                Services
                            </li>
                            <li className="hover:underline text-slate-300">
                                Comunity
                            </li>
                            <li className="hover:underline text-slate-300">
                                Career
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 ml-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="hover:underline text-slate-300">
                                Help & Center
                            </li>
                            <li className="hover:underline text-slate-300">
                                Blog
                            </li>
                            <li className="hover:underline text-slate-300">
                                Termn & Condition
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 ml-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="hover:underline text-slate-300">
                                Pricing
                            </li>
                            <li className="hover:underline text-slate-300">
                                About
                            </li>
                            <li className="hover:underline text-slate-300">
                                Learn
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 ml-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="hover:underline text-slate-300">
                                Drible
                            </li>
                            <li className="hover:underline text-slate-300">
                                Instagram
                            </li>
                            <li className="hover:underline text-slate-300">
                                Twitter
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer;