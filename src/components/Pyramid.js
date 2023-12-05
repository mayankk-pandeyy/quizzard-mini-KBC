import { useState } from "react";
import "./Pyramid.css"


function Pyramid(props){
    const questionNum = props.questionNum;
    const setQuestionNum = props.setQuestionNum;

    const moneyPyramid = props.moneyPyramid;

    return(
        <div className="w-full">
            <ul className="list-none p-[20px]">
                {moneyPyramid.map((item) => {
                    return (
                        <li className={`flex items-center ListItem p-[5px] rounded-md ${questionNum === item.id ? "active" : ""}`}>
                            <span className="text-[18px] font-thin w-[30%]">
                                {item.id}
                            </span>
                            <span className="text-[20px] font-bold">
                                {item.amount}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );


}

export default Pyramid;