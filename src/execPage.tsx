import { createRoot } from 'react-dom/client'
import Header from './UniversalComponents/Header'
import Footer from './UniversalComponents/Footer'
import MemberInfo from './ExecPage/MemberInfo'


createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    
    <section>
      <MemberInfo />
    </section>

    <Footer />
  </>
)
