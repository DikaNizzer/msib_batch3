
const  TopButton = ({setQuery}) => {


    const cities = [
        {
            id:1,
            nama:'Surabaya'
        },
        {
            id:2,
            nama:'Jakarta'
        },
        {
            id:3,
            nama:'Bandung'
        },
        {
            id:4,
            nama:'Bali'
        },
        {
            id:5,
            nama:'Palembang'
        },
    ]
    return(
        <div className="flex items-center justify-around my-6">
            {cities.map((kota) =>(
                <button className="text-white text-lg font-medium mr-4 hover:scale-125" key={kota.id} 
                onClick={() => setQuery({ q: kota.nama})}>
                    {kota.nama}
                </button>
            ) )}
        </div>
    )
}

export default TopButton;