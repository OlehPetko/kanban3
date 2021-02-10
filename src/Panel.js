import './App.css';
import Task from "./Task";

function Panel(props) {
    return (
        <div className="App">
            {props.el}
            {props.task
                .filter(el => el.status === props.el)
                .map(el => <Task el={el} key={el.id}/>
                )}

        </div>
    );
}

export default Panel
;
