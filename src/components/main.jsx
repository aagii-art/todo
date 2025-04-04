import { useState } from "react";
import s from "@/styles/main.module.css";
import { Inter } from "next/font/google";
import { Buttons, Delete, DeleteAll } from "./buttons";

const font = Inter({ subsets: ["latin"], weight: "variable" });

export const Main = () => {

  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  const totalT = tasks.length;
  const [filter, setfilter] = useState("all");
  const completedT = tasks.filter((t)=> t.completed ).length;

  const taskf = (v) => {
    settask(v.target.value);
  };

  const updateF = (id) => {

    settasks( (t)=> {
      return t.map((tas)=> 
       id === tas.id ? { ...tas, completed: !tas.completed } : tas )
    })

  } 

  const save = () => {
    if (!task.trim()) {
      window.alert("Please enter a task!");
      settask("")
      return;
    } else {
      settasks([ {text: task, completed : false, id: Date.now() }, ...tasks ]);
      settask("");
    }
  };
  
  const filterT = filter === "all" ? tasks 
  : filter === "active" ? tasks.filter( (t)=> !t.completed ) : tasks.filter( (t)=> t.completed )
  

  const deleteF = (i) => 
    window.confirm("Are you sure you want to delete this task?") && settasks( (t) => t.filter( (t) => t.id !== i ) ) ; 

  const clear = () =>
    window.confirm("Are you sure you want to delete all completed tasks?")  &&  settasks( tasks.filter((tasks)=> !tasks.completed ));

  return (
    <div className={` ${s.main} ${font.className} `}>

      <p className={s.title}>To-Do List</p>

      <div className={s.inputSection}>
        <input
          type="text"
          value={task}
          onChange={taskf}
          maxLength={100}
          placeholder="Add a new task..."
          onKeyDown={ (b) => b.key === "Enter" && save() }
        />

        <button onClick={save }>Add</button>
      </div>

      <Buttons setf={setfilter} filter={filter} />

      { tasks.length == 0 && <p className={s.noTask} >No tasks yet. Add one above!</p> }

      {
         filterT.map( (v)=>
            <li key={v.id}  className={ s.li } >

                <input type="checkbox" checked={v.completed}  onChange={()=> updateF(v.id) } />
                <span className = {v.completed ? s.completedT : "" } > {v.text  } </span>
                <Delete ondelete={()=> deleteF(v.id) } />

            </li>
         )
      }    

      { completedT > 0 &&  <p className={s.clear} > {completedT} of {totalT} tasks completed <DeleteAll  clear={clear}  /> </p> }

      <p className={s.powered} >Powered by <span className={s.span} >Pinecony academy</span></p>

    </div>
  );
};
