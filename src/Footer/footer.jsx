import './footer.scss'
import facebook from "../img/facebook.png";
import x from "../img/x.png";
import youtube from "../img/youtube.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";

function Footer() {
  return (
    <section class="footer">
      <section class="texto">
        <p>40028922 </p>
      </section>
      <section class="redes">
        <img
          src={facebook}
          alt="facebook"
        />
        <img
          src={x}
          alt="twitter"
        />
        <img
          src={youtube}
          alt="youtube"
        />
        <img
          src={linkedin}
          alt="linkedin"
        />
        <img
          src={instagram}
          alt="instagram"
        />
      </section>
    </section>
  );
}

export default Footer;