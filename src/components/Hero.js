import { useState } from "react";
import Quiz from "./Quiz";
import Timer from "./Timer";
import {data} from "./data"


function Hero(props){

    const questionNum = props.questionNum;
    const setQuestionNum = props.setQuestionNum;
    const earned = props.earned;

    const [finish, setFinish] = useState(false);


    return(
        <div className="flex flex-col h-[100%]">
            {finish ? (
                <div className="flex items-center justify-center h-[100%]">
                    <img src="https://media.giphy.com/media/MxYQrB9jeGzza/giphy.gif" width={200}/>
                    <h1 className="text-4xl font-bold">You Earned : <span className="text-[#ECD444]">{earned}</span></h1>
                    <img src="https://media.giphy.com/media/MxYQrB9jeGzza/giphy.gif" width={200}/>
                </div>
            ) : (

            <>
            {/* Top */}
            <div className="h-1/2 relative">
                {/* Timer */}
                <div className="w-[70px] h-[70px] rounded-full border-[5px] border-white flex items-center justify-center text-3xl font-bold absolute bottom-3 left-20">
                    <Timer setFinish={setFinish} questionNum={questionNum}/>
                </div>
            </div>

            {/* Bottom */}

            <div className="h-1/2">
                <Quiz data={data} setFinish={setFinish} questionNum={questionNum} setQuestionNum={setQuestionNum}/>
            </div>
            </>
            )}
        </div>
    );


}

export default Hero;