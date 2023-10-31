import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import OneHowTo from './components/oneHowTo';
import './howToSellView.style.css';
import {
  EasyToUse,
  FullyResponsive,
  HtmlCss,
  ParallaxEffect,
} from '../../assets';

const sellData = [
  {
    img: <HtmlCss />,
    title: 'HTML & CSS3',
    text: 'We offer a range of high-quality HTML products and resources to simplify web development. Whether you are a beginner or an experienced developer, our solutions streamline the coding process, saving you time and effort. Elevate your web projects with our HTML products today.',
  },
  {
    img: <EasyToUse />,
    title: 'Easy To Use',
    text: "Our products are designed with user-friendliness in mind, ensuring a smooth and intuitive experience. With clear instructions and user support, you'll quickly master their use. Say goodbye to complexity and hello to simplicity with our easy-to-use solutions.",
  },
  {
    img: <FullyResponsive />,
    title: 'Fully Responsive',
    text: 'Experience flawless performance on any device with our products, as they are meticulously crafted to be fully responsive. Our designs adapt seamlessly to mobile, tablet, and desktop screens, providing a consistent and engaging user experience. Embrace the versatility of responsive design with our cutting-edge products.',
  },
  {
    img: <ParallaxEffect />,
    title: 'Parallax Effect',
    text: 'Our products are creatively intertwined with the mesmerizing parallax effect, adding depth and interactivity to your web projects. Elevate your design game with our parallax-enhanced elements and templates, delivering an engaging visual experience. Create immersive and captivating websites effortlessly with our parallax-integrated solutions.',
  },
];

const HowToSell = () => {
  return (
    <div className="howToSellHolder">
      <div className="howToSellMiddle">
        <div className="howtoSellLeftSide">
          <p>SUCCESS</p>
          <h1>HOW WE HELP YOU TO SELL YOUR PRODUCT</h1>
          <HorizontalRuleIcon
            sx={{
              fontSize: '60px',
              color: '#d2b356',
            }}
          />
          <p className="description">
            We empower your product sales through targeted marketing strategies
            and data-driven insights. Our team crafts compelling campaigns that
            resonate with your audience, driving increased visibility and
            conversions. With our expertise, you'll achieve your sales goals and
            reach a wider customer base.
          </p>
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
