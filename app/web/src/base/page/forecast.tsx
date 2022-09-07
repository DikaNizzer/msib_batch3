import { useState } from 'react';
import { page } from 'web-init';
import TopButton  from 'src/components/forecast/TopButton'
import Input  from 'src/components/forecast/Input'
import WaktuDisp  from 'src/components/forecast/WaktuDisp'
import DetailTemperature  from 'src/components/forecast/DetailTemperature'
import Detail  from 'src/components/forecast/Detail'
import getFormattedWeatherData  from 'src/api/cuaca'

export default page({
  url: '/forecast',
  component: ({}) => { 

    const fetchCuaca = async () =>{
      const data = await getFormattedWeatherData({q: 'London'})
      console.log(data)
    }
    
    fetchCuaca();
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopButton />
            <Input />
            <WaktuDisp />
            <DetailTemperature />
            <Detail title="Cuaca Setiap Jam" />
            <Detail title="Cuaca Harian" />
        </div>

      )
  }
})