import { useState } from 'react';
import Star from '../Star';
import './style.css';

const Rating = () => {
  const [value, setValue] = useState(0);

  const handleGlow = () => {
    setValue(value+1)
  }
  
  const handleDim = () => {
    setValue(value-1)
  }

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
        <Star onGlow={handleGlow} onDim={handleDim} />
      </div>
    </div>
  );
};

export default Rating;