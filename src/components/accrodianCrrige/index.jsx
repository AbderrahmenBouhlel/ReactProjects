import React, { useState } from "react";
import { useEffect } from "react";
import data from "./data.jsx";
import "./index.css"



export default function Accordian(){
  
    const [multiple,setMultiple] = useState([])
    const [Multyselection,setMultyselection] = useState(false)

    useEffect(() => {
        console.log(multiple);
    }, [multiple]);

    function handleMultySelection(id){
        setMultiple((prevMultiple) =>{
            if (prevMultiple.includes(id)){
                return prevMultiple.filter(item => item !==id)
            }
            else{
    
                if(Multyselection === true){
                    return  [...prevMultiple ,id]
                }
                else{
                    return [...prevMultiple,id].filter(item => item ===id)
                }

            }
            
        } ) 
    }
   
    return (
        <div className="wrapper">
            <button onClick={() => setMultyselection(!Multyselection)}>Enable Multiselection  its {Multyselection ? "true":"false"}</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="item" key={dataItem.id}>
                            <div  onClick={()=> {handleMultySelection(dataItem.id)}} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                
                                multiple.includes(dataItem.id) ? <div className="content">{dataItem.answer}</div> : null
                               
                            }
                        </div> 
                    )

                    : <div no data found ></div>
                }
            </div>
        </div>
    )
}



/*When the state of a component changes in React, the component function is re-executed to generate a new virtual DOM representation. React then compares this new virtual DOM with the previous one to identify the differences. Based on these differences, React calculates the minimum set of 
changes needed to update the actual DOM, minimizing the performance impact*/

