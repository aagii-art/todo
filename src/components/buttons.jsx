 import s from "@/styles/buttons.module.css"
 
 export const Buttons = ({setf, filter}) => {

   
    return (
        <div className={s.buttons} >
            <button onClick={()=> setf("all") } className={filter === "all" ? s.active : s.passive } >  All</button>
            <button  onClick={()=> setf("active")} className={filter === "active" ? s.active : s.passive }   > Active</button>
            <button  onClick={()=> setf("completed") } className={filter === "completed" ? s.active : s.passive}  >Completed</button>
        </div>
    )
     
 }

 export const Delete = ( {ondelete} ) => {
    return (
        <button className={s.delete} onClick={ondelete} > Delete </button>
    )
}