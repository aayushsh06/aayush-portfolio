import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const events = [
        {
            title: "Coding Competitions Club Vice President",
            date: "January 2023 - Present",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora. Laboriosam voluptatem vero fugit officia aliquam quia minima ipsam perferendis ullam atque. Beatae alias tenetur unde voluptatum ab praesentium error!"
        },
        {
            title: "Research Intern at University of Washington",
            date: "June 2022 - August 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora. Laboriosam voluptatem vero fugit officia aliquam quia minima ipsam perferendis ullam atque. Beatae alias tenetur unde voluptatum ab praesentium error!"
        },
        {
            title: "Software Engineer Intern at Ally Financial",
            date: "September 2022 - December 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora. Laboriosam voluptatem vero fugit officia aliquam quia minima ipsam perferendis ullam atque. Beatae alias tenetur unde voluptatum ab praesentium error!"
        }
    ];

    const [selected, setSelected] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const goToNextEvent = () => {
        setSelected((prevSelected) => (prevSelected + 1) % events.length);
    };

    const goToPreviousEvent = () => {
        setSelected((prevSelected) => (prevSelected - 1 + events.length) % events.length);
    };

    const clearAutoChangeInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null); 
        }
    };

    useEffect(() => {
        const id = setInterval(goToNextEvent, 5000); 
        setIntervalId(id); 
        return () => clearInterval(id); 
    }, []);

    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div className='timeline'>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${selected === index ? 'active' : ''}`}
                        onClick={() => clearAutoChangeInterval()}
                    >
                        <div className='timeline-content'>
                            <h3>{event.title}</h3>
                            <p className='date'>{event.date}</p>
                            <div className='timeline-content-wrapper'>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="arrows">
                    <button
                        className="arrow left"
                        onClick={() => {
                            goToPreviousEvent();
                            clearAutoChangeInterval(); 
                        }}
                    >
                        ←
                    </button>
                    <button
                        className="arrow right"
                        onClick={() => {
                            goToNextEvent();
                            clearAutoChangeInterval(); 
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
