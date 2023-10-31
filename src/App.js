import NavigationView from './features/navigation/navigationView';
import HomeView from './features/home/homeView';
import './App.css';
import HowToSell from './features/howToSell/howToSellView';
import ImageGallery from './features/imageGallery/imageGallery';
import FocusMatters from './features/focusMatters/focusMatters';
import CustomerSaying from './features/cutomersSaying/customersSaying';
import CompaniesOurServices from './features/companiesOurServices/companiesOurServices';
import RightPackage from './features/rightPackage/rightPackage';
import Footer from './features/footer/footer';

function App() {
  return (
    <>
      <NavigationView />
      <HomeView />
      <HowToSell />
      <ImageGallery />
      <FocusMatters />
      <CustomerSaying />
      <CompaniesOurServices />
      <RightPackage />
      <Footer />
    </>
  );
}

export default App;
