import Container from './Container';
import '../../assets/styles/section.css';

function Section(props) {
  return (
    <section className="section section--blue">
      <Container
        title={props.title}

      />
    </section>
  );
}

export default Section;