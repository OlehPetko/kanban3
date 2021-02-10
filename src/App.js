import './App.css';
import Panel from "./Panel";
import {useState} from "react";

const statuses = ['todo', 'progress', 'status', 'done']
const initialTask = [
    {id: Math.random(), name: 'React', status: statuses[0], priority: 1},
    {id: Math.random(), name: 'JS', status: statuses[1], priority: 2},
    {id: Math.random(), name: 'JAVA', status: statuses[2], priority: 1},
    {id: Math.random(), name: 'Pyton', status: statuses[3], priority: 2},
]

function App() {
    const [task, setTask] = useState(initialTask)
    const [inputValue, setInputValue] = useState('')
    const addTask = () => {
        const newTask = {
            id: Math.random(),
            name: inputValue,
            status: statuses[0],
            priority: 1
        }
        const newList = [...task, newTask]
        setTask(newList)
        setInputValue('')
    }
    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addTask}>add</button>
            {statuses.map(el =>
                <div key={el}>
                    <Panel el={el} task={task}/>
                </div>
            )}
            <hr/>
        </div>
    );
}

export default App;
