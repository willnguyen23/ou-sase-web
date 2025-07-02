// Slideshow.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "/slick-1.8.1/slick/slick-theme.css";

export default function Slideshow() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
  };

    return (
        <Slider {...settings}>
            
        </Slider>
    );
}

/*
const data = [
    {
        title: "SASE MISSION",
        info: ["SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential."]
    },
    {
        title: "UPCOMING EVENTS",
        info: ["AUGUST 27TH - FIRST GBM OF THE YEAR",
               "AUGUST 27th - INTERN APPLITCATIONS OPEN"]
    },
    {
        title: "DUE DATES",
        info: ["SEPTEMBER 14th - INTERN APPLICATIONS DUE"]
    },
  ]

    return (
        <Slider {...settings} className="about-sase-container" >
            <{data.map((d, idx) => (           
                <div className="indiv-box">
                    <div className="box-header">
                        <h1>{d.title}</h1>
                    </div>
                    <div className="box-info">
                        <ul>
                            {d.info.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}>
        </Slider>
    );
*/

 
 