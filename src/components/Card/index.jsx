import "./styles.css";

const Card = ({ newsPaperName, title }) => {
  return (
    <div className="box">
      <div className="textContainer">
        <p>{newsPaperName}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
