import React, { useEffect, useState } from 'react';
import '../styles/Current.css';

const Current = () => {
  const learning = ['React', 'SpringBoot', 'Machine Learning', 'Beautiful Soup', 'PostgreSQL', 'AWS Technologies'];

  const [text, setText] = useState(learning[0]);
  const [learningIndex, setLearningIndex] = useState(0);
  const [currLearning, setCurrLearning] = useState('');
  const [dir, setDir] = useState('Forward');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTextUpdate = () => {
      if (dir === 'Forward' && index < text.length) {
        setCurrLearning(prev => prev + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);

        if (index + 1 === text.length) {
          setTimeout(() => {
            setDir('Backward');
          }, 1000);
        }
      } else if (dir === 'Backward' && index >= 0) {
        setCurrLearning(prev => prev.substring(0, prev.length - 1));
        setIndex(prevIndex => prevIndex - 1);

        if (index === 0) {
          setDir('Forward');
          setLearningIndex(prev => (prev + 1) % learning.length);
          setText(learning[(learningIndex + 1) % learning.length]);
        }
      }
    };

    const interval = setInterval(handleTextUpdate, 200);

    return () => clearInterval(interval);
  }, [index, dir, text, learning, learningIndex]);

  return (
    <div className="current">
      <div className="current-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
        <h2>Current</h2>
      </div>
      <div className="horizontal-line"></div>
      <p>
        I am currently exploring <span>{currLearning}</span><span className='cursor'></span>
      </p>
      <p> I am working on <a href='https://github.com/aayushsh06/Maize-Market' target='_blank'>Maize Market</a></p>
      
    </div>
  );
};

export default Current;
