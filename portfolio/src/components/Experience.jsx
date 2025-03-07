import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const events = [
        {
            title: "Coding Competitions Club Vice President",
            date: "January 2023 - Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Research Intern at University of Washington",
            date: "June 2022 - August 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Software Engineer Intern at Ally Financial",
            date: "September 2022 - December 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    const [selected, setSelected] = useState(0);
    const [direction, setDirection] = useState("right");
    const [intervalId, setIntervalId] = useState(null);
    const [active, setActive] = useState(true);

    const goToNextEvent = () => {
        setDirection("right");
        setSelected((prev) => (prev + 1) % events.length);
    };

    const goToPreviousEvent = () => {
        setDirection("left");
        setSelected((prev) => (prev - 1 + events.length) % events.length);
    };

    const clearAutoChangeInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    useEffect(() => {
        if(active){
            const id = setInterval(goToNextEvent, 5000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
        else{
            clearAutoChangeInterval();
        }
    }, [active]);

    return (
        <div className='experience'>
            <h1><i className='fa-solid fa-briefcase'></i>Experience</h1>
            <div className='timeline'>
                {events.map((event, index) => {
                    let className = "timeline-item";
                    if (index === selected) className += " active";
                    else if (direction === "right" && index === (selected - 1 + events.length) % events.length) className += " exit-left";
                    else if (direction === "left" && index === (selected + 1) % events.length) className += " exit-right";

                    return (
                        <div key={index} className={className} onClick={() => setActive(prev => !prev)}>
                            <div className='timeline-content'>
                                <h3>{event.title}</h3>
                                <p className='date'>{event.date}</p>
                                <div className='timeline-content-wrapper'>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="arrows">
                    {/*}<button
                        className="arrow left"
                        onClick={() => {
                            goToPreviousEvent();
                            setActive(false);
                        }}
                    > 
                        ←
                    </button>{*/}
                    <button
                        className="arrow right"
                        onClick={() => {
                            goToNextEvent();
                            setActive(false);
                        }}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Experience;
