const Product = () => {
    return(
        <div className="h-auto mt-5">
            <div className="text-center">
                <p className="text-amber-500 font-bold"> Product :</p>
                <h1 className='text-3xl font-bold  sm:text-3xl text-black items-end'>Our product we've created before</h1>
            </div>

            <div className="grid grid-cols-2 text-center mt-10 h-screen">
                <div className="place-content-center">
                    <img className='m-auto h-3/5 rounded-xl place-content-center' src="/img/mockup.jpg" alt="/" />
                </div>

                <div className="grid grid-cols-2 gap-8 content-start mr-10"  >
                    <div className="image bg-white rounded-lg shadow-lg overflow-hidden h-77">
                        <a href="#">
                            <img className="" src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg"  />
                            <p className="text-black font-bold mt-2"> Fashion Landing Page</p>
                            <p> we make this landing page for fashion marketplace</p>
                        </a>
                    </div>
                    <div className="image bg-white rounded-lg shadow-lg overflow-hidden h-77">
                        <a href="#">
                            <img className="" src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg"  />
                            <p className="text-black font-bold mt-2"> Insurance Landing Page</p>
                            <p> we make this landing page for fashion marketplace</p>
                        </a>
                    </div>
                    <div className="image bg-white rounded-lg shadow-lg overflow-hidden h-77">
                        <a href="#">
                            <img className="" src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg"  />
                            <p className="text-black font-bold mt-2">NFT Dashboard</p>
                            <p> we make this landing page for fashion marketplace</p>
                        </a>
                    </div>
                    <div className="image bg-white rounded-lg shadow-lg overflow-hidden h-77">
                        <a href="#">
                            <img className="" src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg"  />
                            <p className="text-black font-bold mt-2">Donation Mobile App</p>
                            <p> we make this landing page for fashion marketplace</p>
                        </a>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Product;