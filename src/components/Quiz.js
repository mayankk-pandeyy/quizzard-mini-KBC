import React, { useEffect, useState } from "react";
import "./Quiz.css"
import wrong from "../assets/wrong.mp3"
import useSound from "use-sound";
import correct from "../assets/start.wav"


function Quiz(props){
    const data = props.data;
    const setFinish = props.setFinish;
    const questionNum = props.questionNum;
    const setQuestionNum = props.setQuestionNum;

    const [currentQue, setCurrQue] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [wrongAns] = useSound(wrong);
    const [correctAns] = useSound(correct);




    useEffect(()=>{
        setCurrQue(data[questionNum-1]);
    },[data, questionNum]);

    function delay(duration, callbackfunc){
        setTimeout(() => {
            callbackfunc()
        }, duration);
    }

    function answerHandler(answer){
        setSelectedAnswer(answer);
        setClassName("answer active");
        delay(3000, ()=>setClassName(answer.correct ? ("answer correct"): ("answer wrong")));
        delay(5000, ()=>{
            if(answer.correct){
                correctAns();
                delay(1000, ()=>{
                    setQuestionNum((prev)=>prev+1);
                    setSelectedAnswer(null);
                })
                
            }else{
                wrongAns();
                delay(2000, ()=>{
                    setFinish(true);
                })
            }
        });
    }

    return(
        <div className="h-[100%] flex flex-col items-center justify-around">
            {/* Questions */}
            <div className="w-4/5 cursor-none bg-gradient-to-r from-gray-700 via-gray-900 to-black border-[2px] border-white text-center p-[20px] rounded-xl text-3xl font-bold">
                {currentQue?.question}
            </div>


            {/* Answers */}
            <div className="w-[100%] flex justify-center flex-wrap">
                {/* Options */}
               {currentQue?.answers.map((answer)=>{
                return (
                    <div className={`w-[40%] p-[10px] text-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 border-[1px] border-white rounded-xl mt-3 mr-5 mb-3 text-2xl font-bold cursor-pointer answer ${selectedAnswer === answer ? (className):("")}`} onClick={()=>answerHandler(answer)}>
                        {answer.text}
                    </div>
                );
               })}
            </div>
        </div>
    );



}

export default Quiz;