import React, { useState } from 'react';

function Slides({ slides }) {
  const [count, setCount] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    if (count + 1 < slides.length) {
      setCount(count + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRest = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(0);
    }
  };

  return (
    <div>
      <div id='navigation' className='text-center'>
        <button
          data-testid='button-restart'
          className='small outlined'
          disabled={count === 0}
          onClick={handleRest}
        >
          Restart
        </button>
        <button
          data-testid='button-prev'
          className='small'
          disabled={count === 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid='button-next'
          className='small'
          disabled={count === slides.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div id='slide' className='card text-center'>
        <h1 data-testid='title'>{slides[count].title}</h1>
        <p data-testid='text'>{slides[count].text}</p>
      </div>
    </div>
  );
}

export default Slides;
