import './card.scss';

function Card({ name, handleClick }) {
  return (
    <div className='card' id={name} onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
}

export default Card;
