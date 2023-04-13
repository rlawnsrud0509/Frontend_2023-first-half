import "./style.css";
import location from "../images/location.png";

export default function Body(props) {
  
  return (
    <>
      <div className="Card">
        <img src={props.img}></img>

        <div className="content">
          <div className="country">
            <img src={location}></img>
            {props.country}
          </div>

          <h2>{props.cardName}</h2>
          <h4>{props.date}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
