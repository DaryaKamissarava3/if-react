import CardItem from './CardItem';
import '../../assets/styles/card.css';
import data from '../../assets/Arrays/Hotels';

function Card() {
  return (
    <div className="card">
      {
        data.map((item) =>
          (
            <CardItem
              imageUrl={item.imageUrl}
              name={item.name}
              city={item.city}
              country={item.country}
              key={item.id}
            />
          ))
      }
    </div>
  );
}

export default Card;