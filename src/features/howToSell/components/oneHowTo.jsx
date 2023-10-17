import '../style/oneHowTo.style.css';

const OneHowTo = ({ img, title, text }) => {
  return (
    <div className="oneHowToHolder">
      {img}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default OneHowTo;
