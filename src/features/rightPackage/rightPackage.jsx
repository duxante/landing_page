import { HorizontalRule } from '@mui/icons-material';
import './rightPackage.style.css';
import OnePackage from './components/onePackage';

const typeOfPackages = [
  {
    typeOfPackage: 'PERSONAL',
    packageSubtitle: 'The Standard Version',
    packageCurrency: '$',
    packagePrice: '19',
    packageDescription:
      'Complete marketing solution with essential features for success.',
    packageDownloads: '5 Downloads',
    packageExtension: '2 Extensions',
    tutorials: 'Tutorials',
    forumSupport: 'Forum Support',
    updates: '1 Year Free Updates',
  },
  {
    typeOfPackage: 'STUDENT',
    packageSubtitle: 'Most Popular Choice',
    packageCurrency: '$',
    packagePrice: '29',
    packageDescription:
      "Our top-tier marketing package: the industry's favorite choice.",
    packageDownloads: '15 Downloads',
    packageExtension: '5 Extensions',
    tutorials: 'Tutorials With Files',
    forumSupport: 'Forum Support',
    updates: '2 Year Free Updates',
  },
  {
    typeOfPackage: 'BUSINES',
    packageSubtitle: 'For The Whole Team',
    packageCurrency: '$',
    packagePrice: '49',
    packageDescription:
      'Tailored marketing for businesses: Growth-focused strategies and tools.',
    packageDownloads: 'Unlimited Downloads',
    packageExtension: 'Unlimited Extensions',
    tutorials: 'HD Video Tutorials',
    forumSupport: 'Chat Support',
    updates: 'Lifetime Free Updates',
  },
];

const RightPackage = () => {
  return (
    <div className="rightPackageHolder">
      <div className="rightPackageMiddle">
        <div className="rightPackageUpper">
          <p>YOUR CHOICE</p>
          <h1>WE HAVE THE RIGHT PACKAGE FOR YOU</h1>
          <HorizontalRule
            sx={{
              fontSize: '60px',
              color: '#d2b356',
            }}
          />
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
