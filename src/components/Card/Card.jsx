import './card.scss';

function Card({ test, onClick }) {
  return (
    <div className='card' id={test} onClick={onClick}>
      <p>{test}</p>
    </div>
  );
}

export default Card;
