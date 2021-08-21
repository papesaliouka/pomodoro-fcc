import './TimerControllers.styles.css';
import {useContext} from 'react';
import {TimerContext} from '../../context/timer/Timer.context'
const TimerControllers=()=>{
    const {reset, setIsPaused} = useContext(TimerContext)
    return(
        <div className='timer-controller'>
            <button  onClick={()=> setIsPaused(prev => !prev)} id='start_stop'>start-stop</button>
            <button id='reset' onClick={()=> reset()}>reset</button>
        </div>
    );
}
export default TimerControllers