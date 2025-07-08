import React, { useState } from 'react'
import '/src/ExecPage/Exec.css'

interface MemberImages {
    id: string;
    num: number;
    alt: string;
    src: string;
    info: string[];
}

const memberImages: MemberImages[] = [
    {
        id: "daniel",
        num: 1,
        alt: "daniel park - president",
        src: "/src/Images/daniel.png",
        info: ["Daniel Park", "President", "Chemical Engineering", "Junior"]
    }, 
    {
        id: "ian",
        num: 2,
        alt: "ian dang - vpx",
        src: "/src/Images/ian.png",
        info: ["Ian Dang", "Vice President External", "Computer Science", "Junior"]
    },
    {
        id: "donald",
        num: 3,
        alt: "donald nguyen - vpi",
        src: "/src/Images/donald.png",
        info: ["Donald Nguyen", "Vice President Internal", "Management Information Systems", "Senior"]
    }, 
    {
        id: "sarah",
        num: 4,
        alt: "sarah kim - secretary",
        src: "/src/Images/sarah.png",
        info: ["Sarah Kim", "Secretary", "Chemical Biosciences", "Junior"]
    }, 
    {
        id: "josh",
        num: 5,
        alt: "josh tu - finance",
        src: "/src/Images/blank.png",
        info: ["Joshua Tu", "Director of Finance", "Computer Engineering", "Junior"]
    }, 
    {
        id: "janes",
        num: 6,
        alt: "janes le - community",
        src: "/src/Images/janes.png",
        info: ["Janes Le", "Community Chair", "Computer Engineering", "Junior"]
    },
    {
        id: "dylan",
        num: 7,
        alt: "dylan quan - community",
        src: "/src/Images/blank.png",
        info: ["Dylan Quan", "Community Chair", "Industrial and Systems Engineering", "Senior"]
    }, 
    {
        id: "anson",
        num: 8,
        alt: "anson tang - marketing",
        src: "/src/Images/anson.png",
        info: ["Anson Tang", "Marketing Director", "Mechanical Engineering", "Junior"]
    }, 
    {
        id: "don",
        num: 9,
        alt: "don dao - graphics",
        src: "/src/Images/blank.png",
        info: ["Don Dao", "Graphic Designer", "Information Science and Technology", "Senior"]
    }, 
    {
        id: "angela",
        num: 10,
        alt: "angela vu - creative",
        src: "/src/Images/blank.png",
        info: ["Angela Vu", "Creative Chair", "Computer Engineering", "Sophomore"]
    },
    {
        id: "melissa",
        num: 11,
        alt: "melissa ng - marketing asst",
        src: "/src/Images/melissa.png",
        info: ["Melissa Ng", "Marketing Assistant", "Computer Science", "Senior"]
    }, 
    {
        id: "bea",
        num: 12,
        alt: "bea nazareno - intern coor",
        src: "/src/Images/blank.png",
        info: ["Bea Nazareno", "Intern Coordinator", "Biomedical Engineering", "Senior"]
    }, 
    {
        id: "will",
        num: 13,
        alt: "william nguyen - intern coor.",
        src: "/src/Images/blank.png",
        info: ["William Nguyen", "Intern Coordinator", "Computer Engineering", "Junior"]
    }, 
    {
        id: "jet",
        num: 14,
        alt: "jet flener - event coor.",
        src: "/src/Images/blank.png",
        info: ["Jet Flener", "Event Coordinator", "Computer Engineering", "Junior"]
    },
    {
        id: "carina",
        num: 15,
        alt: "carina chen - event coor.",
        src: "/src/Images/blank.png",
        info: ["Carina Chen", "Event Coordinator", "Biology (Pre-Dent)", "Sophomore"]
    }, 
    {
        id: "grace",
        num: 16,
        alt: "grace chaing - science chair",
        src: "/src/Images/blank.png",
        info: ["Grace Chiang", "Science Chair", "Pre-Nursing", "Sophomore"]
    }, 
]

export default function Members() { 

    return (
        <>
            <div className = "img-section">
                {memberImages.map((image) => (
                    <div className = "img-indiv">
                        <img src={image.src} />
                    </div>
                ))}
            </div>
        </>
    )
}
