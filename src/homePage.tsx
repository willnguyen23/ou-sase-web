import { createRoot } from 'react-dom/client'
import Header from './UniversalComponents/Header'
import Footer from './UniversalComponents/Footer'
import Carousel from './HomePage/ImageCarousel.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <section className="carousel-style">
        <Carousel />
    </section>
    <section className="about-sase">
        <div className="sase-merch-video">
            <video src="src/Images/sase-vid.mp4" loop autoPlay muted/>
        </div>
        <div className="sase-mission">
            <h1>What is SASE's mission?</h1>
            <p>SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential.</p> <br />
            <p>We do this by...</p>
            <ul>
                <li>Career Growth</li>
                <li>Mentorship and Community</li>
                <li>National Conferences and Career Fairs</li>
                <li>College Chapter and Campus Leadership</li>
                <li>Celebrating Culture</li>
            </ul>
        </div>
    </section>
    <section className="annoucements">
        <div className="news">
            <div className="text-box">
                <h1>UPCOMING EVENTS</h1>
                <ul>
                    <li>AUGUST 27TH - FIRST GBM OF THE YEAR</li>
                    <li>AUGUST 27th - INTERN APPLITCATIONS OPEN"</li>
                </ul>

            </div>
            <div className="text-box">
                <h1>DUE DATES</h1>
                    <ul>
                        <li>SEPTEMBER 14th - INTERN APPLICATIONS DUE</li>
                    </ul>
            </div>
        </div>
    </section>
    <Footer />
  </>
)
