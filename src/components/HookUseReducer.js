import { useReducer, useState } from "react";

const HookUseReducer = () => {
                  //onde executa a funçao que vai alterar o valor
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ];

    const taskReducer = (state, action) => {
        switch (action.type) {
           /*  verifica o switch */
          case "ADD":
            const newTask = {
                id: Math.random(),
                text: taskText,
            };

            setTaskText("");
                   /* tarefa atual + nova tarefa */
            return[...state, newTask];
          case "REMOVE":

        return state.filter((task) => task.id !== action.id);

        default:
            return state;
        }
    };

    const [taskText, setTaskText] = useState("");
                  //vai executar a funçao     //funçao que vai alterar o estado
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

    const handleSubmit =(e) => {
        e.preventDefault()

        dispatchTask({ type: "ADD"});
    };

    const removeTask = (id) => {
        dispatchTask({ type: "REMOVE", id: id});
    };

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número!</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={(e) => setTaskText(e.target.value)} 
                value={taskText}
            />
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                {task.text}
            </li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer