import './App.css';
import Header from './components/Header';
import ContactSection from './components/ContactSection'
import StockSection from './components/StockSection'
import StudySection from './components/StudySection'
import NordicSection from './components/NordicSection'

function App() {
  return (
    <div className="App">
      <Header />
      <ContactSection />
      <StockSection />
      <StudySection />
      <NordicSection />
    </div>
  );
}

export default App;
