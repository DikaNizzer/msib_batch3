import React, { useState } from "react";

const  Input = ({setQuery}) => {
    const kotaRef = React.useRef(null);

    const [kota, SetKota] = useState("");

    const handleTombolCari = () =>{
        if(kota !== '') setQuery({q:kota})
    }
    
    const ketikaSubmit = (event) =>{
        event.preventDefault();
        const namaKota = kotaRef.current.value;
        SetKota(namaKota);
        if(kota !== '') setQuery({q:kota})
    }

    return(
       <div className="flex flex-row justify-center my-6">

            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">

                <form onSubmit={ketikaSubmit} >
                  <input ref={kotaRef}
                //   value={kota}
                  onChange={(e) => SetKota(e.currentTarget.value)}
                  type="text" 
                  placeholder="Cari...."
                  className="text-xl  font-light p-2 w-full shadow-xl focus:outline-none capitalize"/>
                </form>
                    <svg size={50} onClick={handleTombolCari} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white hover:scale-125 cursor-pointer transition ease-out ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <svg size={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white cursor-pointer transition ease-out hover:scale-125">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="" className="text-xl text-white font-light " >*C</button>
            </div>
       </div>
    )
}

export default Input;