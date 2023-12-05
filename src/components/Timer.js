import { useEffect, useState } from "react";



function Timer(props){


    const setFinish = props.setFinish;
    const questionNum = props.questionNum;

    const [timer, setTimer] = useState(30);


    useEffect(()=>{
        if( timer === 0){
            setFinish(true);
        }
        const interval = setInterval(()=>{
            setTimer((prev)=>prev-1);
        },1000);
        return ()=> clearInterval(interval);
    },[setFinish, timer]);

    useEffect(()=>{
        setTimer(30);
    },[questionNum])

    return timer;

}

export default Timer;