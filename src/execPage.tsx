import { createRoot } from 'react-dom/client'
import Navbar from './UniversalComponents/Navbar'
import Header from './UniversalComponents/Header'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <h1></h1>
    <Navbar />
  </>
)