import ReactDom from 'react-dom/client'
import Header from './UniversalComponents/Header'
import Footer from './UniversalComponents/Footer'
import MemberInfo from './ExecPage/MemberInfo'


ReactDom.createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    
    <section>
      <MemberInfo />
    </section>

    <Footer />
  </>
)
