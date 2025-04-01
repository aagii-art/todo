import s from "@/styles/main.module.css";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";
import { useState } from "react";
import { Buttons } from "./buttons";

const font = Inter({ subsets: ["latin"], weight: "variable" });

export const Main = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  const [filter, setfilter] = useState("all");

  const taskf = (v) => {
    settask(v.target.value);
  };

  const save = () => {
    if (task.trim()) {
      settasks([...tasks, {text: task, completed : false } ]);
      settask("");
    }else {
      settask("")
    }
  };
  
  const filterT = filter === "all" ? tasks 
  : filter === "active" ? tasks.filter( (t)=> !t.completed ) : tasks.filter( (t)=> t.completed )
  
  const updateF = (i) => {
    const uTasks = tasks.map( (t,ind)=>
      i===ind ? {...t, completed: !t.completed} : t
    );
    settasks(uTasks);
  } 
   
  return (
    <div className={` ${s.main} ${font.className} `}>

      <p className={s.title}>To-Do List</p>

      <div className={s.inputSection}>
        <input
          type="text"
          placeholder="Add a new task..."
          onChange={taskf}
          value={task}
        />

        <button onClick={save }>Add</button>
      </div>

      <Buttons setf={setfilter} filter={filter} />

      { tasks.length == 0 && <p className={s.noTask} >No tasks yet. Add one above!</p> }

      {
         filterT.map( (v,i)=>{
           return <li> <input type="checkbox" checked={v.completed}  onChange={()=> updateF(i) } />
            {v.text} </li>
         } )
      }    
      
      <p className={s.powered} >Powered by <span className={s.span} >Pinecony academy</span></p>

    </div>
  );
};
