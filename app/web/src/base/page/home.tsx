import { page } from 'web-init'
import  Header  from 'src/components/home/Header'
import  Hero  from 'src/components/home/Hero'
import  Video  from 'src/components/home/Video'
import  LowerMenu  from 'src/components/home/LowerMenu'
import  Services  from 'src/components/home/Services'
import  MidlleServices  from 'src/components/home/MidlleServices'
import  Product  from 'src/components/home/Product'
import  Testimoni  from 'src/components/home/Testimoni'
import  Footer  from 'src/components/home/Footer'

export default page({
  url: '/',
  component: ({}) => {
    return (
      <div className="Header">
        <Header />
        <Hero />
        <Video />
        <LowerMenu />
        <Services />
        <MidlleServices />
        <Product />
        <Testimoni />
        <Footer />

      </div>

      
      )
  }
})