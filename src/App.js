import Title from './components/title/Title.component';
import LengthControllersContainer from './components/length-controllers-container/LengthControllersContainer.component';
import Timer from './components/timer/Timer.component';
import TimerControllers from './components/timer-controllers/TimerControllers.component';
import './App.css'
import { TimerContextProvider } from './context/timer/Timer.context';
function App() {
  return (
    <div className="App">
      <Title/>
      <TimerContextProvider>
        <LengthControllersContainer/>
        <Timer/>
        <TimerControllers/>
      </TimerContextProvider>
    </div>
  );
}

export default App;
