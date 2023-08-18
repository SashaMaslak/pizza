import { useState } from "react"
import { FilterValueType } from "./App"

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropType = {
  title: string
  tasks: Array<TaskType> //  --> TaskType[]
  addTask: (newTaskTitle: string) => void
  removeTask: (tasksId: string) => void
  changeFilter: (value: FilterValueType) => void
}

export const TodoList = (props: PropType) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("")

  const handleChange = (value: string) => {
    setNewTaskTitle(value)
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={e => handleChange(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
          }}
        >
          +
        </button>
      </div>
      <ul>
        {props.tasks.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={() => props.removeTask(t.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("completed")}>
          Completed
        </button>
      </div>
    </div>
  )
}
