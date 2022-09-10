import { useEffect, useState } from 'react';
import { page } from 'web-init';
import TopButton  from 'src/components/forecast/TopButton'
import Input  from 'src/components/forecast/Input'
import WaktuDisp  from 'src/components/forecast/WaktuDisp'
import DetailTemperature  from 'src/components/forecast/DetailTemperature'
import Detail  from 'src/components/forecast/Detail'
import getFormattedWeatherData  from 'src/api/cuaca'
// import { useEffect, useState } from "react";

export default page({
  url: '/forecast',
  component: ({}) => { 

    const [query, setQuery] = useState({q: 'Surabaya'});
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
      const fetchCuaca = async () =>{
        await getFormattedWeatherData({...query}).then(
          (data) => {
          setWeather(data);
        });
        // console.log(data)
      };

      fetchCuaca();

    }, [query])

   
    
    
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopButton setQuery={setQuery} />
            <Input setQuery={setQuery} />
            

            {weather && (
              <div>
                  <WaktuDisp weather={weather} />
                  <DetailTemperature weather={weather} />
              </div>
              
            )}


            {/* <Detail title="Cuaca Setiap Jam" />
            <Detail title="Cuaca Harian" /> */}
        </div>

      )
  }
})