import './card.scss';

function Card({ name }) {
  return (
    <div className='card' id={name}>
      <p>{name}</p>
    </div>
  );
}

export default Card;
