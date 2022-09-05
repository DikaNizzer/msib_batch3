
// import  serviceImage  from 'public/img/service.jpg'
// import  serviceImage  from 'src/img/service.jpg'

const  MidlleService = () => {
    return(
        <div className="bg-green-800 grid grid-cols-2 gap-10 h-auto content-center items-center ">
            <div className="mt-20 ml-5 rounded-xl">
                <img className='w-3/4 rounded-xl' src="/img/service.jpg" alt="/" />
            </div>

            <div className="mt-20 mb-10">
                <p className="text-amber-500 font-bold"> How it Work :</p>
                <h1 className='text-2xl font-bold  sm:text-3xl text-white items-end'>Step to get powerfull <br/>services</h1>
                <ol class="list-decimal  text-white">
                    <li>Site map and user flow </li>
                    <p className='ml-5 mr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci necessitatibus nihil fuga a hic sapiente, aspernatur quidem reiciendis sunt dolore dolorem, suscipit ipsa minus ab.
                    </p>
                    <li>Wireframing / lofi</li>
                    <p className='ml-5 mr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci necessitatibus nihil fuga a hic sapiente, aspernatur quidem reiciendis sunt dolore dolorem, suscipit ipsa minus ab.
                    </p>
                    <li>Visualize / hifi</li>
                    <p className='ml-5 mr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci necessitatibus nihil fuga a hic sapiente, aspernatur quidem reiciendis sunt dolore dolorem, suscipit ipsa minus ab.
                    </p>
                </ol>
            </div>
        </div>
    )
}

export default MidlleService;