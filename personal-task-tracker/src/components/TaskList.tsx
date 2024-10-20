import React, {useEffect, useState} from 'react';
import TaskFeatures from '../TaskFeatures';
import TaskTrackerService from '../TaskTrackerService';
import '../styles/TaskList.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import EditModal from './EditModal';

const TaskList = () => {
    const [tasks, setTasks] = useState<TaskFeatures[]>(TaskTrackerService.getTasks());
    const [editedTask, setEditedTask] = useState<TaskFeatures | (null)>(null);
    const [editedTaskText, setEditedTaskText] = useState<string>("");
    const [taskText, setTaskText] = useState<string>("");
    const [modalShow, setModalShow] = useState<boolean>(false);

    //function for handling edit actions
    // const handleEditStart = (id:number, text:string) => {
    //     setEditedTaskId(id);
    //     setEditedTaskText(text);
    // }

    // const handleEditCancel = () => {
    //     setEditedTaskId(null);
    //     setEditedTaskText("");
    // }

    // const handleEditSave = (id:number) => {
    //     if (editedTaskText.trim() !== "") {
    //         const updateTask = TaskTrackerService.updateTask({
    //             id,
    //             text: editedTaskText,
    //             completed: false
    //         });

    //         setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? updateTask : task)))

    //         setEditedTaskId(null);
    //         setEditedTaskText("");
    //     }
    // }

    //Function to delete task
    const handleDeleteTask = (id:number) => {
        TaskTrackerService.deleteTask(id);
        setTasks((prevTask) => prevTask.filter((task) => (task.id !== id)))
    }

    // add
    const handleAddTask = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        TaskTrackerService.addTasks(taskText);
        console.log(TaskTrackerService.getTasks());
        setTasks(TaskTrackerService.getTasks());
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        console.log('change:', value)
        setTaskText(value);
    }

    const resetEditedTask = () => {
        setEditedTask(null)
    }

    useEffect(() => {
        setTasks(TaskTrackerService.getTasks());
    }, [modalShow])

    return (
        <>
            <div className="task-container">
                <form onSubmit={handleAddTask}>
                    <input type='text' value={taskText} onChange={handleChangeText} />
                    <button type="submit">Add</button>
                </form>
                <div className="task-list-container">
                    { tasks.map(task =>
                        <div className='task-item' key={'task-item' + task.id}>
                            <div className='task-item-text'>{task.text}</div>
                            <div className="task-item-btn-group">
                                <ButtonGroup className="me-2" aria-label="First group">
                                    <Button onClick={() => setEditedTask(task)}>Edit</Button>
                                    <Button onClick={() => handleDeleteTask(task.id)}>delete</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <EditModal
                task={editedTask}
                show={modalShow}
                setShow={setModalShow}
                resetEditedTask={resetEditedTask}
            />
        </>
    )
}

export default TaskList;