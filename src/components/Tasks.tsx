import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";
import { TasksInterface } from "../App";

interface TasksProps {
    tasks: Array<TasksInterface>;
    onDeleteTask: (taskId: number) => void;
    onCompleteTask: (taskToSetCompleted: TasksInterface) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {

    function countCompletedTasks() {
        let countCompletedTasks = tasks.filter((task) => {
            return task.completed;
        })

        console.log(countCompletedTasks)

        return countCompletedTasks.length;
    }
    
    const countedCompletedTasks = countCompletedTasks();

    return (
        <div className={styles.tasks}>
            <header className={styles.tasksInformations}>
                <div>
                    <label className={styles.createdTasks}>
                        Tarefas criadas
                        <span>
                            {tasks.length}
                        </span>
                    </label>
                </div>

                <div>
                    <label className={styles.completedTasks}>
                        Concluídas
                        <span>
                            {countedCompletedTasks} de {tasks.length}
                        </span>
                    </label>
                </div>
            </header>

            <footer className={styles.toDoList}>
                {
                    tasks?.map((task) => {
                        const handleDeleteTask = () => onDeleteTask(task.id);
                        const handleCompleteTask = () => onCompleteTask(task);

                        return (
                            <div key={task.id} className={styles.task}>
                                <div className={styles.content}>
                                    <input
                                        type="checkbox"
                                        onClick={handleCompleteTask}
                                        defaultChecked={task.completed}
                                    />
                                    <p className={task.completed ? styles.completedTask : ''}>
                                        {task.task}
                                    </p>
                                    <button onClick={handleDeleteTask}><Trash size={24} /></button>
                                </div>
                            </div>
                        )
                    })
                }


            </footer>
        </div>
    )

}

