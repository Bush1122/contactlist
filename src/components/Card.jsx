import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.Name} </h2>
          <img className="circal-img" src={props.img} />
        </div>
        <div className="bottom">
          <p className="info">{props.SELL}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
