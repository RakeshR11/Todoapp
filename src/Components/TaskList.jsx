import React from 'react'
import TaskItem from './TaskItem';
import Styles from './TaskList.module.css';
const TaskList = ({task,deleteTask,toggleTask,enterEditMode}) => {
  return (
    <ul className={Styles.task}>
        {
            task.sort((a, b) => b.id - a.id).map(task=>(
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
                />
        ))
        }
    </ul>
  )
}

export default TaskList
