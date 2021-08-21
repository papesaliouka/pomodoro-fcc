import './Timer.styles.css';
import {useEffect, useContext, useRef} from 'react';
import {TimerContext} from '../../context/timer/Timer.context';

const formatTime = (time)=> time > 9 ? time : '' + 0 + time

const Timer=()=>{ 

    const {isPaused,time, setTime, isSessionTime,isBreakTime,setBreakTime, setSessionTime, breakLength, sessionLength,isMuted } = useContext(TimerContext);

    const audio = document.getElementById('beep');

    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time%60);


    const interval = useRef(null);


    const countDown=()=>{
        if(isPaused) return
        setTime((prev)=>{
            if(isSessionTime){
                if(prev===0){
                   audio.play();
                    setBreakTime(true);
                    setSessionTime(false);
                    return breakLength*60
                }
                return prev - 1
            }
            if(isBreakTime){
                if(prev===0){
                    audio.play();
                    setSessionTime(true);
                    setBreakTime(false);
                    return sessionLength*60
                }
                return prev - 1
            }
        })
    }

    useEffect(()=>{
         interval.current = setInterval(countDown,1000);
         return ()=> clearInterval(interval.current)
    },[isPaused,isSessionTime,isBreakTime])

    return(
        <div className='timer'>
            <h2 id='timer-label' >{!isSessionTime ? 'Break':'Session'}</h2>
            <h2 id='time-left'>{`${formatTime(minutes)}:${formatTime(seconds)}`}</h2>
            <audio id="beep" preload="auto" src="https://soundbible.com/mp3/Radio%20Interruption-SoundBible.com-1434341263.mp3"></audio>
        </div>
    );
}

export default Timer;