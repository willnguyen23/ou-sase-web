import { createRoot } from 'react-dom/client'
import Header from './UniversalComponents/Header'
import Carousel from './HomePage/ImageCarousel.tsx'
import Slideshow from './HomePage/Slideshow.tsx'

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
        <div className="sase-hype-vid">
            <video src="src/Images/sase-hype-vid.mp4" loop autoPlay muted />
        </div>
    </section>
    <div className="socials">
            <h1>Socials</h1>
            <a target="_blank" href="https://ousase.carrd.co/?fbclid=PAZXh0bgNhZW0CMTEAAadDLasf6uBxuZfIw89MG443dUBpaZbVXIDAiBHGFcKos9K4OJSr-3MB3JnVMA_aem_mjifGURJpZUP_PUo5q4HHw">
                <img src="src/Images/carrdLogo.png" className="social-logos" alt="card-logo" />
            </a>
            <a target="_blank" href="https://www.instagram.com/ou.sase/">
                <img src="src/Images/instagramLogo.png" className="social-logos" alt="instagram-logo" />
            </a>
            <a target="_blank" href="https://discord.gg/5ZRuAVvsJB">
                <img src="src/Images/discordLogo.png" className="social-logos" alt="discord-logo" />
            </a>
    </div>
  </>
)
