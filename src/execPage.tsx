import { createRoot } from 'react-dom/client'
import Header from './UniversalComponents/Header'
import MemberInfo from './ExecPage/MemberInfo'
import MemberImage from './ExecPage/MemberImage'
import './ExecPage/Exec.css'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <section>
      <div className = "img-section">
        <MemberImage image="/src/Images/daniel.png" />

      </div>
      <div className = "info-section">
        <h1>yo</h1>
        <MemberInfo name="Daniel Park" major="Chemical Engineering" year="junior" />
        
      </div>
    </section>
   
  </>
)