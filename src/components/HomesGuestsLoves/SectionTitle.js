import '../../assets/styles/sectionTitle.css';

function SectionTitle(props) {
  return (
    <div className="section-header">
      <h2 className="section-subtitle">{props.title}</h2>
    </div>
  );
}

export default SectionTitle;