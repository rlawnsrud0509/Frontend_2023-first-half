import "./Card.css";

function Card({ img, rating, reviewCount, country, title, price }) {
  let imgAddress = `/images/${img}.png`;

  return (
    <div className="container3">
      <img src={imgAddress}></img>
      <div className="textArea">
        <h6>
          <img src="/images/Star.png"></img> {rating}
          <span style={{ color: "#aaaaaa" }}>
            {" "}
            ({reviewCount}).{country}
          </span>
        </h6>
        <h6>{title}</h6>
        <h6>
          <b>From ${price}</b> / person
        </h6>
      </div>
    </div>
  );
}

export default Card;
