import TaskFeatures from "./TaskFeatures";

const LOCAL_STORAGE_KEY = "tasks";

const TaskTrackerService = {
    //Get the tasks
    getTasks: (): TaskFeatures [] => {
        const getTaskStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return getTaskStr ? JSON.parse(getTaskStr) : [];
    },

    getTaskById: (taskId: Number): TaskFeatures => {
        const getTaskStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        const tasks = getTaskStr ? JSON.parse(getTaskStr) : [];
        return tasks.find((task: TaskFeatures) => task.id == taskId);
    },

    //Adding the tasks
    addTasks: (text: string): TaskFeatures | void => {
        if (text  !== '') {
            const tasks = TaskTrackerService.getTasks();
            const newTask: TaskFeatures = {id: tasks.length + 1, text, completed: false};
            const updateTasks = [...tasks, newTask];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTasks));

            return newTask;
        }
    },

    //Updating the tasks
    updateTask: (task: TaskFeatures): TaskFeatures => {
        const tasks = TaskTrackerService.getTasks();
        const updateTasks = tasks.map((t) => (t.id === task.id ? task: t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTasks));

        return task;
    },

    //Deleting the tasks
    deleteTask: (id:number): void => {
    const tasks = TaskTrackerService.getTasks();
    const updateTasks = tasks.filter((task) => task.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTasks));

    }
}

export default TaskTrackerService;