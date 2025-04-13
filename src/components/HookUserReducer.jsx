import { useReducer, useState } from 'react'

const HookUserReducer = () => {
  //1 - useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  //2 - advancing in the reducer
  const initialTasks = [
    {id: 1, text: 'Do something'},
    {id: 2, text: 'Do something else'}
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText
        }
        setTaskText('')
        return [...state, newTask]
      case 'DELETE':
        return state.filter((task) => task.id !== action.id)
      default:
        return state
    }
  }

  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({type: 'ADD'})
  }

  const removeTask = (id) => {
    dispatchTasks({type: 'DELETE', id: id})
  }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Number: {number}</p>
        <button onClick={dispatch}>Change Number</button>

        <hr />

        <h2>Tasks: </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type='submit' value='Send' />
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
    </div>
  )
}

export default HookUserReducer