import { useState } from 'react';
import './style.css';

const Star = ({onGlow, onDim}) => {
  const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div 
      className={starClass}
      onClick={() => {
        setGlowing(!glowing)
        !glowing ? onGlow() :onDim()
      }}
    >    
    </div>
  );
};

export default Star;