import './Home.css'

export default function Carousel() {
    return (
        <>
            <section>
                <div className="carousel-style ">
                    <div>
                        <div className="carousel">
                            <article>
                                <img src="/src/Images/finalGBM2025.jpg" alt="final-gbm" />
                            </article>

                            <article>
                                <img src="/src/Images/gbmFour.JPG" alt="sase-gbm4" />
                            </article>

                            <article>
                                <img src="/src/Images/saseNatcon2025.jpg" alt="sase-natcon25" />
                            </article>

                            <article>
                                <img src="/src/Images/saseVolunteer.jpg" alt="saseunteer" />
                            </article>

                            <article>
                                <img src="/src/Images/saseLNY.JPG" alt="sase-lny" />
                            </article>

                            <article>
                                <img src="/src/Images/saseHalloween.JPG" alt="saseoween" />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}