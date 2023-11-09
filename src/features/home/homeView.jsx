import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import Button from '../../components/button/button';
import { home } from '../../data/home';
import { Heart } from '../../assets';
import './homeView.style.css';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="homeViewMiddle">
        <div className="leftSide">
          <HorizontalLine />
          <h1>{home.title}</h1>
          <HorizontalLine />
          <p>{home.description}</p>
          <Button buttonText={home.buttonText} />
        </div>
        <Heart />
      </div>
    </div>
  );
};

export default HomeView;
