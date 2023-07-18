import React from 'react';
import mockData from '@/utils/todomock';
import styles from "./index.module.scss";

const ToDoCard = () => {
    return (
        <div className={styles.ToDoCard}>
            {mockData.map((element) => (
                <div className={styles.ToDoSingle} key={element.id}>
                    <h3 className={styles.ToDoLabel}>{element.todo}</h3>
                </div>
            ))}
        </div>
    );
};

export default ToDoCard;