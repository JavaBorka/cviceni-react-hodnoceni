import { useState } from 'react';
import Star from '../Star';
import './style.css';

const Rating = () => {
  const [value, setValue] = useState(0);

  const handleSelect = (rating) => {
    setValue(rating)
  }

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star onSelect={handleSelect} rating={1} glowing={value >= 1}/>
        <Star onSelect={handleSelect} rating={2} glowing={value >= 2}/>
        <Star onSelect={handleSelect} rating={3} glowing={value >= 3} />
        <Star onSelect={handleSelect} rating={4} glowing={value >= 4} />
        <Star onSelect={handleSelect} rating={5} glowing={value === 5} />
      </div>
    </div>
  );
};

export default Rating;