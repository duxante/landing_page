import NavigationView from './features/navigation/navigationView';
import HomeView from './features/home/homeView';
import './App.css';
import HowToSell from './features/howToSell/howToSellView';

function App() {
  return (
    <>
      <NavigationView />
      <HomeView />
      <HowToSell />
    </>
  );
}

export default App;
