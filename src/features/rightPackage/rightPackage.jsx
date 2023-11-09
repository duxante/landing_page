import HorizontalLine from '../../components/horizontalLine/horizontalLine';
import { yourChoice, typeOfPackages } from '../../data/packages';
import OnePackage from './components/onePackage';
import './rightPackage.style.css';

const RightPackage = () => {
  return (
    <div className="rightPackageHolder">
      <div className="rightPackageMiddle">
        <div className="rightPackageUpper">
          <p>{yourChoice.title}</p>
          <h1>{yourChoice.heading}</h1>
          <HorizontalLine />
        </div>
        <div className="rightPackageBottom">
          {typeOfPackages.map((onePackageData) => {
            return (
              <OnePackage
                typeOfPackage={onePackageData.typeOfPackage}
                packageSubtitle={onePackageData.packageSubtitle}
                packageCurrency={onePackageData.packageCurrency}
                packagePrice={onePackageData.packagePrice}
                packageDescription={onePackageData.packageDescription}
                packageDownloads={onePackageData.packageDownloads}
                packageExtension={onePackageData.packageExtension}
                tutorials={onePackageData.tutorials}
                forumSupport={onePackageData.forumSupport}
                updates={onePackageData.updates}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightPackage;
