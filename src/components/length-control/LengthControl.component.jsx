import './LengthControl.styles.css';
import {useContext} from 'react'
import { TimerContext } from '../../context/timer/Timer.context';

const LengthControl =({type})=>{
    const {sessionLength,breakLength,incrementSessionLength,decrementSessionLength,incrementBreakLength,decrementBreakLength, isPaused} = useContext(TimerContext);

    return (
        <div className='length-control'>
            <button onClick={isPaused && type==='Session' ?
             ()=> incrementSessionLength() : isPaused && type==='Break' ?
             ()=> incrementBreakLength() : null}
             id={`${type.toLowerCase()}-increment`}>+</button>
            <span id={`${type.toLowerCase()}-length`}>{
            type==='Session' ? sessionLength : type==='Break' ? breakLength: null 
            }</span>
            <button onClick={isPaused && type==='Session' ?
             ()=> decrementSessionLength() : isPaused && type==='Break' ?
             ()=> decrementBreakLength() : null} id={`${type.toLowerCase()}-decrement`}>-</button>
        </div>
    );
}

export default LengthControl