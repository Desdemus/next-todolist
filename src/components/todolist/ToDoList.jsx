import { useContext, useState } from "react";
import { MainContext } from "@/states";
import styles from "./index.module.scss";
import { todomock } from "@/utils/todomock";



const ToDoList = () => {
    const [todo, setTodo] = useState("")
    const { state, dispatch } = useContext(MainContext);
    const onInputChange = (e) => {
        setTodo(e.target.value)
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD_NEW_TODO", payload: { id: Math.floor(Math.random() * 100000), todo: todo, completed: false } })
    }
    const onClickRemove = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id })
    }

    return (
        <>
            <form>
                <input type="text" onChange={(e) => onInputChange(e)} />
                <input type="submit" onClick={(e) => onHandleSubmit(e)} />
            </form>
            <div className={styles.ToDoCard}>

                {state.todos.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.ToDoItem} ${item.completed && styles.completed
                            }`}
                    >
                        <div className={styles.content}>
                            <p className={styles.todos} onClick={() => onClickRemove(item.id)}>{item.todo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ToDoList;
