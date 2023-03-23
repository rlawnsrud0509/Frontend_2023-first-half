import "./Main.css";
import Face from "./Rectangle 90.png";
import MailIcon from "./Icon.svg";
import Insta from "./Insta.png";
import GitH from "./GitH.png";
import Faceb from "./Faceb.png";
import Twit from "./Twit.png";
import Link from "./Link.png";

export default function Main() {
  return (
    <div className="container">
      <div className="mainForm">
        <img src={Face} className="Img"></img>
        <div className="para">
          <p>
            <span style={{ fontSize: "25px" }}>Kim Jun Kyoung</span>
            <br />
            <span
              style={{
                fontSize: "12.8px",
                color: "#F3BF99",
                fontWeight: "400",
              }}
            >
              Frontend Developer
            </span>
            <br />
            <br />
            <span style={{ fontSize: "10.24px" }}>laurasmith.website</span>
          </p>
          <a
            href="https://github.com/rlawnsrud0509"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <button className="mailBtn">
              <img src={MailIcon}></img>
              &nbsp;&nbsp;Email
            </button>
          </a>
          <div className="desc">
            <h3>About</h3>
            <p>
              I am a frontend developer I am a frontend developer I am a
              frontend developer I am a frontend developer I am a frontend
              developer I am a frontend developer I am a frontend developer I am
              a frontend developer
            </p>
            <h3>Interests</h3>
            <p>
              I am a frontend developer I am a frontend developer I am a
              frontend developer I am a frontend developer I am a frontend
              developer
            </p>
          </div>
        </div>
        <div className="footer">
          <img src={Twit}></img>
          <img src={Faceb}></img>
          <img src={Insta}></img>
          <img src={Link}></img>
          <img src={GitH}></img>
        </div>
      </div>
    </div>
  );
}
