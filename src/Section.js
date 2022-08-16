import Container from './Container';

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