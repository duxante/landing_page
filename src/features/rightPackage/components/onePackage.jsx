import Button from '../../../components/button/button';
import '../style/onePackage.style.css';

const OnePackage = ({
  typeOfPackage,
  packageSubtitle,
  packageCurrency,
  packagePrice,
  packageDescription,
  packageDownloads,
  packageExtension,
  tutorials,
  forumSupport,
  updates,
}) => {
  return (
    <div className="onePackageHolder">
      <h3>{typeOfPackage}</h3>
      <p className="packageSubtitle">{packageSubtitle}</p>
      <div className="packagePrice">
        <div className="justPrice">
          <p>{packageCurrency}</p>
          <h1>{packagePrice}</h1>
        </div>
        <p>{packageDescription}</p>
      </div>
      <p className="underTheDescription">{packageDownloads}</p>
      <hr />
      <p className="underTheDescription">{packageExtension}</p>
      <hr />
      <p className="underTheDescription">{tutorials}</p>
      <hr />
      <p className="underTheDescription">{forumSupport}</p>
      <hr />
      <p className="lastInTheDescription">{updates}</p>
      <Button buttonText="BUY TODAY" />
    </div>
  );
};

export default OnePackage;
