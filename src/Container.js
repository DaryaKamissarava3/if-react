import SectionTitle from './SectionTitle';
import Card from './Card';

function Container(props) {
  return (
    <div className="container">
      <SectionTitle
        title={props.title}
      />
      <Card />
    </div>
  );
}

export default Container;