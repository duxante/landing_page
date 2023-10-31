import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import './footer.style.css';

const Footer = () => {
  return (
    <div className="footerHolder">
      <div className="footerMiddle">
        <p>Made in hope for better times</p>
        <p>@copyright Duxante</p>
        <div className="socialMediaFooter">
          <Facebook />
          <Google />
          <Twitter />
          <Instagram />
          <YouTube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
