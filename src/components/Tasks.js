import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, toggleReminder }) => {
 return (
 <>
 {tasks.map((task) => {
 return (
    <div>
        <p>Double click to add/remove reminder</p>
 <Task
 key={task.id}
 task={task}
 handleDelete={onDelete}
 toggleReminder={toggleReminder}
 />
    </div>
 );
 })}
 </>
 );
};
export default Tasks