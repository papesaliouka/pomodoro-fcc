import { useState, createContext, useEffect} from "react";


export const TimerContext = createContext();

export const TimerContextProvider = ({children})=>{

    const [isMuted, setIsMuted] = useState(false)
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [isSessionTime, setSessionTime] = useState(true);
    const [isBreakTime, setBreakTime] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const incrementSessionLength = ()=> setSessionLength(prev => prev < 60 ? prev + 1 : prev);
    const decrementSessionLength = ()=> setSessionLength(prev => prev > 1 ? prev - 1 : prev);
    const incrementBreakLength = ()=> setBreakLength(prev => prev < 60 ? prev + 1 : prev);
    const decrementBreakLength = ()=> setBreakLength(prev => prev > 1 ? prev - 1 : prev);

    const [time,setTime] = useState(sessionLength*60)

    useEffect(()=>{
        setTime(isSessionTime ? sessionLength*60:breakLength*60)
    },[sessionLength,breakLength,isSessionTime])

    const reset = ()=>{
        setIsPaused(true);
        setBreakLength(5);
        setSessionLength(25);
        setBreakTime(false);
        setSessionTime(true);
        setTime(sessionLength*60);
        setIsMuted(true);
        const audio = document.getElementById('beep');
        audio.currentTime=0;
        audio.pause();
    }


    return(
        <TimerContext.Provider
        value={{
            sessionLength,incrementSessionLength,decrementSessionLength,
            breakLength,incrementBreakLength,decrementBreakLength,
            isSessionTime, setSessionTime,
            isBreakTime, setBreakTime, reset,
            isPaused, setIsPaused,setSessionLength, setBreakLength, time, setTime, isMuted
        }}
        >
            {children}
        </TimerContext.Provider>
    );
}