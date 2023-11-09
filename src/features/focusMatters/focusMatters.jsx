import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import Button from '../../components/button/button';
import { johnDoe, believing } from '../../data/believing';
import { AfroSamurai } from '../../assets';
import './focusMatters.style.css';

const FocusMatters = () => {
  return (
    <div className="focusMattersHolder">
      <div className="focusMattersMiddle">
        <div className="focusMattersLeftSide">
          <p>"{johnDoe.description}"</p>
          <p className="johnDoe">{johnDoe.name}</p>
        </div>
        <div className="focusMattersRightSide">
          <div className="textAndAfro">
            <div className="believingText">
              <p className="believing">{believing.title}</p>
              <h1>{believing.heading}</h1>
              <HorizontalLine />
              <p className="firstP">{believing.description1}</p>
              <p>{believing.description2}</p>
              <p>{believing.description3}</p>
              <Button buttonText={believing.buttonText} />
            </div>
            <AfroSamurai />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMatters;
