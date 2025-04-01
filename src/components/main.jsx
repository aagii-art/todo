import s from "@/styles/main.module.css";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";
import { useState } from "react";
import { Buttons } from "./buttons";

const font = Inter({ subsets: ["latin"], weight: "variable" });

export const Main = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);

  const taskf = (v) => {
    settask(v.target.value);
  };

  const save = () => {
    if (task.trim()) {
      settasks([...tasks, task]);
      settask("");
    } else {
      settask("");
    }
  };
  
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

      <Buttons />

      { tasks.length == 0 && <p className={s.noTask} >No tasks yet. Add one above!</p> }

    
        {tasks.map((v, index) => {
          return <li key={index} className={s.tasks} >  <input type="checkbox" /> {v} </li>;
        })}
      
      <p className={s.powered} >Powered by <span className={s.span} >Pinecony academy</span></p>

    </div>
  );
};
