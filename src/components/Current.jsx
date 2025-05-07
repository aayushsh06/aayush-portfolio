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
    <div className='current'>
      <h1><i className='fas fa-rocket'></i>Current Work</h1>
      <p>
        I am currently exploring <span>{currLearning}</span><span className='cursor'></span>
      </p>
      <p> I am working on <a href='https://github.com/aayushsh06/Maize-Market' target='_blank'>Maize Market</a></p>
      
    </div>
  );
};

export default Current;
