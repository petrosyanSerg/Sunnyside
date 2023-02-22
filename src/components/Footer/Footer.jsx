import "./Footer.scss";
import MenuList from "../NavBar/MenuList/MenuList";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer_logo"></div>
      <MenuList color={"green"} active={null} />
      <div className="socmedia_item">
        <div className="facebook media">
          <a
            href="https://www.facebook.com/profile.php?id=100010460433530"
            target="_blank"
            className="media"
          >
            <AiFillFacebook />
          </a>
        </div>
        <div className="LinkedIn media">
          <a
            href="https://www.linkedin.com/in/petrosyanserg"
            target="_blank"
            className="media"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="Insta media">
          <a
            href="https://www.instagram.com/_petrosyanserg_/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            className="media"
          >
            <AiFillInstagram />
          </a>
        </div>
        <div className="GitHub media">
          <a
            href="https://github.com/petrosyanSerg"
            target="_blank"
            className="media"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
