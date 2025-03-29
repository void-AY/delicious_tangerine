import './App.css';
import Header from './components/header/header';
import SubHeader from './components/subheader/subheader';
import AboutUs from './components/aboutUs/aboutUs';
import Dignities from './components/dignities/dignities';
import Menu from './components/menu/menu';
import Delivery from './components/delivery/delivery';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
      <div className="App">
        <Header />
        <SubHeader />
        <div className='AppContainer' id="about">
          <div className='AppBlock'>
            <h1>О кафе</h1>
            <AboutUs />            
          </div>
          <div className='AppBlock' id="dignities">
            <h1>Наши достоинства</h1>
            <Dignities />            
          </div>
          <div className='AppBlock' id="menu">
            <h1>Меню</h1>
            <Menu />  
          </div>
          <div className='AppBlock' id="delivery">
            <h1>Доставка</h1>
            <Delivery />
          </div>
          <div className='AppBlock' id="contacts">
            <h1>Контакты</h1>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
