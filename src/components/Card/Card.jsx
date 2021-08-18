import './card.scss';
import mavenOrb from '../../assets/maven.png';
import awakenerOrb from '../../assets/awakener.png';
import exaltedOrb from '../../assets/exalted.png';
import tailoringOrb from '../../assets/tailoring.png';
import chaosOrb from '../../assets/chaos.png';
import divineOrb from '../../assets/divine.png';
import ancientOrb from '../../assets/ancient.png';
import regalOrb from '../../assets/regal.png';
import vaalOrb from '../../assets/vaal.png';
import chromaticOrb from '../../assets/chromatic.png';
import annulmentOrb from '../../assets/annul.png';
import glassblower from '../../assets/glassblower.png';
import cartographer from '../../assets/carto.png';
import alchemyOrb from '../../assets/alchemy.png';
import bindingOrb from '../../assets/binding.png';
import chanceOrb from '../../assets/chance.png';
import transmutationOrb from '../../assets/transmutation.png';

function Card({ name, handleClick }) {
  function getIcon(currency) {
    switch (currency) {
      case "Maven's Orb":
        return mavenOrb;
      case "Awakener's Orb":
        return awakenerOrb;
      case 'Exalted Orb':
        return exaltedOrb;
      case 'Tailoring Orb':
        return tailoringOrb;
      case 'Chaos Orb':
        return chaosOrb;
      case 'Divine Orb':
        return divineOrb;
      case 'Ancient Orb':
        return ancientOrb;
      case 'Regal Orb':
        return regalOrb;
      case 'Vaal Orb':
        return vaalOrb;
      case 'Chromatic Orb':
        return chromaticOrb;
      case 'Orb of Annulment':
        return annulmentOrb;
      case "Glassblower's Bauble":
        return glassblower;
      case "Cartographer's Chisel":
        return cartographer;
      case 'Orb of Alchemy':
        return alchemyOrb;
      case 'Orb of Binding':
        return bindingOrb;
      case 'Orb of Chance':
        return chanceOrb;
      case 'Orb of Transmutation':
        return transmutationOrb;
      default:
        return 'error';
    }
  }

  return (
    <div className='card' id={name} onClick={handleClick}>
      <p className='title'>{name}</p>
      <img src={getIcon(name)} alt='' />
    </div>
  );
}

export default Card;
