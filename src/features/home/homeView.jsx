import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import heart from '../../assets/heart.png';
import './homeView.style.css';
import Button from '../../components/button/button';

const HomeView = () => {
  return (
    <div className="homeViewHolder">
      <div className="leftSide">
        <HorizontalRuleIcon
          sx={{
            fontSize: '60px',
            color: '#d2b356',
          }}
        />
        <h1>A free and simple landing page</h1>
        <HorizontalRuleIcon
          sx={{
            fontSize: '60px',
            color: '#d2b356',
          }}
        />
        <p>
          Namari is a free landing page you can use for your projects. It is
          free to use for your personal and commercial projects, enjoy!
        </p>
        <Button buttonText="Start creating today" />
      </div>
      <img className="heart" src={heart} alt="heart" />
    </div>
  );
};

export default HomeView;
