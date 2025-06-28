import { createRoot } from 'react-dom/client'
import Navbar from './UniversalComponents/Navbar'
import Header from './UniversalComponents/Header'
import Carousel from './HomePage/ImageCarousel.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
  
    <Carousel />

    <Navbar />
  </>
)
