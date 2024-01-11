"use client"
import { useState } from "react";
import Image from "next/image";

const AccordianItem = ({item}) => {
    const [showAnswer,setShowAnswer]= useState(false);
    const {question, answer}= item;

    const handleIconClick = () => {
        setShowAnswer((prev)=>{
            return !prev;
        })
    }
    return <div className="my-4 border-b border-gray-100 p-2">
        <div onClick={handleIconClick} className="flex justify-between items-start p-2"> 
            <span className="text-md font-extrabold max-w-48  sm:max-w-80 cursor-pointer hover:text-base-dark_purple">
                {question}
            </span>
            <span className="w-8 h-8 cursor-pointer">
                {!showAnswer?
                <Image
                    src="/assets/icon-plus.svg" 
                    alt="Plus Icon"
                    width={0}
                    height={0}
                    style={{
                        width:"100%",
                        height:"100%"
                    }}
                    >
                    </Image>:
                    <Image 
                        alt="Minus Icon" 
                        src="/assets/icon-minus.svg"
                        width={0}
                        height={0}
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                        >
                        </Image>
                        }
            </span>
        </div>
        {showAnswer?<p className="text-sm p-2 text-base-grayish_purple">{answer}</p>:null}
    </div>
}

export default AccordianItem