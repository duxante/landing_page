import { madeBy, socialNetworkIcons } from '../../data/footerData';
import OneNetWorkIcon from './components/oneNetWorkIcon';
import './footer.style.css';

const Footer = () => {
  return (
    <div className="footerHolder">
      <div className="footerMiddle">
        <p>{madeBy.title}</p>
        <p>{madeBy.copyright}</p>
        <div className="socialMediaFooter">
          {socialNetworkIcons.map((icon) => {
            return <OneNetWorkIcon img={icon.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
