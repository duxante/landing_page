import heart from './heart.png';
import facebook from './facebook.png';
import easyToUse from './easytouse.png';
import fullyResponsive from './fullyresponsive.png';
import parallaxEffect from './parallaxeffect.png';
import htmlCss from './htmlcss.png';

const Heart = () => {
  return <img src={heart} alt="heart" />;
};

const Facebook = () => {
  return <img src={facebook} alt="facebook logo" />;
};

const EasyToUse = () => {
  return <img src={easyToUse} alt="easy to use icon" />;
};

const FullyResponsive = () => {
  return <img src={fullyResponsive} alt="icon of mobile phones" />;
};

const ParallaxEffect = () => {
  return <img src={parallaxEffect} alt="icon of rocket" />;
};

const HtmlCss = () => {
  return <img src={htmlCss} alt="html logo" />;
};

export { Heart, Facebook, FullyResponsive, EasyToUse, ParallaxEffect, HtmlCss };
