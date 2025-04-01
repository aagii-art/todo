 import s from "@/styles/buttons.module.css"
import { useState } from "react"
 
 export const Buttons = ({unclick, clicked}) => {

   
    return (
        <div className={s.buttons} >
            <button  onClick={ ()=> clicked("all") } className={ unclick == "all" ? s.active : s.passive }  >  All</button>
            <button  onClick={ ()=> clicked("active") } className={ unclick == "active" ? s.active : s.passive } > Active</button>
            <button onClick={ ()=> clicked("completed") } className={ unclick == "completed" ? s.active : s.passive } >Completed</button>
        </div>
    )
     
 }