import './Home.css'
import FinalGBM from './src/Images/finalGBM2025.jpg'
import FourthGBM from './src/Images/gbmFour.jpg'
import Natcon from './src/Images/saseNatcon2025.jpg'
import Volunteer from './src/Images/saseVolunteer.jpg'
import LNY from './src/Images/saseLNY.jpg'
import Halloween from './src/Images/saseHalloween.jpg'

export default function Carousel() {
    return (
        <>
            <section>
                <div className="carousel-style ">
                    <div>
                        <div className="carousel">
                            <article>
                                <img src={FinalGBM} alt="final-gbm" />
                            </article>

                            <article>
                                <img src={FourthGBM} alt="sase-gbm4" />
                            </article>

                            <article>
                                <img src={Natcon} alt="sase-natcon25" />
                            </article>

                            <article>
                                <img src={Volunteer} alt="saseunteer" />
                            </article>

                            <article>
                                <img src={LNY} alt="sase-lny" />
                            </article>

                            <article>
                                <img src={Halloween} alt="saseoween" />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}