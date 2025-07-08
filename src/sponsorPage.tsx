import { createRoot } from 'react-dom/client'
import Header from './UniversalComponents/Header'
import Footer from './UniversalComponents/Footer'
import './SponsorPage/Sponsor.css'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <h1>THis is sponsor</h1>
    <Footer />
  </>
)