import { PlusCircle } from 'phosphor-react';

import styles from "./Header.module.css";
import LogoImage from '../assets/logo.png'
import { ChangeEvent, FormEvent, MouseEvent } from 'react';

interface HeaderProps {
    newTask: string;
    onChangeNewTaskInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onCreateNewTask: (event: FormEvent<HTMLFormElement>) => void;
}

export function Header({ newTask, onChangeNewTaskInput, onCreateNewTask  }: HeaderProps) {

    const handleNewTaskInvalid = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    return (

        <header className={styles.header}>
            <img
                src={LogoImage}
                alt="Project Logo"
            />

            <form onSubmit={onCreateNewTask} className={styles.addNewTaskForm}>
                <input
                    type='text'
                    className={styles.input}
                    required
                    onInvalid={handleNewTaskInvalid}
                    value={newTask}
                    onChange={onChangeNewTaskInput}
                    placeholder='Adicione uma nova tarefa'
                />
                <button
                    type="submit"
                    disabled={!newTask}
                >
                    Criar <PlusCircle size={16} />
                </button>
            </form>
        </header>

    )

}