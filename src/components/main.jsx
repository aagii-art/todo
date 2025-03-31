import s from "@/styles/main.module.css";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";
import { useState } from "react";

const font = Inter({subsets: ["latin"], weight: "variable" });

export const Main = () => {

  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);

  const taskf = (v) => {
    settask(v.target.value)
    console.log(v);

  }

  const save = () => {
   if(task){
    settasks([...tasks, task])
    settask("")
   }
  }

    return (
        <div className={` ${s.main} ${font.className} `} >  
            <p className={s.title} >To-Do List</p>
            <div className={s.inputSection} >
              <input type="text" placeholder="Add a new task..."   onChange={taskf} value={task} />
              
              <button onClick={save} >Add</button>
            </div>
            
            <ul>
                {
                    tasks.map((v, index)=> {
                      return  <li key={index} >  {v}  </li>
                    })
                }
            </ul>

        </div>
    )
}