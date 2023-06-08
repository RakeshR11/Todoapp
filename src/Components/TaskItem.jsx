import React, { useState } from 'react'
import Styles from './TaskItem.module.css';
import {CheckIcon} from '@heroicons/react/24/outline';
import {PencilIcon} from '@heroicons/react/24/outline';
import {TrashIcon} from '@heroicons/react/24/outline';
const TaskItem = ({task,deleteTask,toggleTask,enterEditMode}) => {
    const[isChecked,setIsChecked]= useState(task.checked);
    const handleCheckboxChange=(e)=>{
        setIsChecked(!isChecked);
      toggleTask(task.id);  
    }
  return (
    <li className={Styles.task}>
        <div className={Styles['task-group']}>
            <input type='Checkbox'className={Styles.checkbox} Checked={isChecked} onChange={handleCheckboxChange}
            name={task.name} id={task.id}/>
            <label htmlFor={task.id} className={Styles.label}>
                {task.name}
                <p className={Styles.checkmark}>
                    <CheckIcon strokewidth={2} width={24}
                    height={24}/>

                </p>
            </label>
        </div>
        <div className={Styles['task-group']}>
            <button className='btn' aria-label={'Update ${task.name} Task'}
             onClick={()=>enterEditMode(task)}
            ><PencilIcon strokewidth={2} width={24}
            height={24}/></button>
             <button className={'btn ${styles.delete}'} aria-label={'Delete ${task.name} Task'}
            onClick={()=>deleteTask(task.id)}
            ><TrashIcon strokewidth={2} width={24}
            height={24}/></button>
        </div>
    </li>
  )
}

export default TaskItem
