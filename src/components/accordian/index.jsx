import React from "react";
import data from "./data.jsx"
import { useState } from "react";
import "./AccordianCss/index.css"

export default function Accordian(){
   
    const [enableMValue, setEnableValueFunction] = useState(true);
    function hundleClick(){
        setEnableValueFunction((self)=>{
        return !self
        })
    
    }

    function handleItemClick(event){
        const itemele = event.target.closest('.item')
        const main = document.querySelector('.mainContent')
        itemele.classList.toggle('active')
        if (enableMValue === false){
        Array.from(main.children).forEach((child)=>{
            if(child != itemele){
            child.classList.remove('active')
            }
        })
        } 
        
    }
  
  return (
    <main className='mainContent'>
      
      <div onClick={hundleClick} className='toggleEnable item'>Enable MultiSelection <span> now its { enableMValue == true ? "true" :"false"} </span> </div>

    
        {data.map((item,index)=>{
            return(
                <div key={index} onClick={handleItemClick} className="item">
                    <div className="InfoText">
                        <p className="Info">{item.question}</p>
                        <div className='plus'>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <p className="moreInfo">
                        {item.answer}
                    </p>

                </div>
            )
            

        })}
        

    
     
     
      

    </main>
      
  )
}