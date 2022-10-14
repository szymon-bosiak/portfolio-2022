import './App.css';
import BackgroundLines from './components/BackgroundLines/Background';
import Footer from './components/Footer/Footer';
import Greetings from './components/Greetings/Greetings';
import MySkills from './components/MySkills/MySkills';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Transition from './components/Transition/Transition';
import TransitionReversed from './components/TransitionReversed/TransitionReversed';

function App() {
  return (
    <div>
      <Nav />
      <Greetings />
      <BackgroundLines />
      <Transition />
      <MySkills />
      <TransitionReversed />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
