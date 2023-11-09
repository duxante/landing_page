import { success, sellData } from '../../data/success';
import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import OneHowTo from './components/oneHowTo';
import './howToSellView.style.css';

const HowToSell = () => {
  return (
    <div className="howToSellHolder">
      <div className="howToSellMiddle">
        <div className="howtoSellLeftSide">
          <p>{success.title}</p>
          <h1>{success.header}</h1>
          <HorizontalLine />
          <p className="description">{success.description}</p>
        </div>
        <div className="howToSellRightSide">
          {sellData.map((data) => {
            return (
              <OneHowTo img={data.img} title={data.title} text={data.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowToSell;
