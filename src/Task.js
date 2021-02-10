import './App.css';

function Task(props) {
    return (
        <div className="App">
            {props.el.name}
            <div>
                priority: {props.el.priority}
                <button>del</button>
                {props.el.status !== 'todo' && <button>up</button>}
                {props.el.status !== 'done' && <button>down</button> }



            </div>

        </div>
    );
}

export default Task
;
