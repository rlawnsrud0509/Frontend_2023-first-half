import "./Card.css";

function Card({ img, rating, reviewCount, country, title, price, openSpots }) {
  let imgAddress = `/images/${img}.png`;
  let BadgeText;
  BadgeText = openSpots ? (BadgeText = "ONLINE") : (BadgeText = "SOLD OUT");
  let Country;

  return (
    <div className="container3">
      <div className="cardBadge">{BadgeText}</div>
      <img src={imgAddress}></img>
      <div className="textArea">
        <h6>
          <img src="/images/Star.png"></img> {rating}
          <span style={{ color: "#aaaaaa" }}>
            {" "}
            ({reviewCount}).{country == "Online" ? (Country = "USA") : "Norway"}
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
