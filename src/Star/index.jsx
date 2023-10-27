import './style.css';

const Star = ({glowing, rating, onSelect}) => {
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div 
      className={starClass}
      onClick={() => {
        onSelect(rating)
      }}
    >    
    </div>
  );
};

export default Star;