/* export default function EventToDo() {
    function handleClick(e) {
        alert("You pressed button");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.value;
        //if(input.length == 0) return;
        input.value.trim();//space trim
        if (inputValue == "") {
            alert("task can not be empty");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = <span>${(taskValue) </span>
        <button class="deletion">Delete</button>;
        document.getElementById("tasklist").appendChild(li);

    }
    return (
        <>
            <h1>Event Handling</h1>
        //<button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick("Kiet")}>Click Me</button>
            <form onSubmit={handlesubmit}>
                <input type="text" name="task" placholder="Add your task here" />
                <button type="submit">Add task </button>
            </form>
            <uI id="tasklist" onClick={handleCickList} >
                <li></li>
                <li> Get Id when click when we have </li>

            </ul >
        </>
    );
} */
export default function EventToDo() {
    const [task, setTask] = useState //usestate is used to store and update data inside a component 
    function handleSubmit(e) {
        e.preventDefault();          // to stop reload of page
        const input = e.target.task;
        const inputValue = input.value.trim();
        if (inputValue === "") {
            alert("Task can not be empty");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<span>${inputValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);

    }

    function handleClickList(e) {
        if (e.target.className === "deleteBtn") {
            e.target.parentElement.remove();
        }
    }

    return (
        <>

            <h1>Event to Do</h1>
            <h1> To Do List </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your task here" />
                <button type="submit">Add Task</button>

            </form>

            <ul id="taskList" onClick={handleClickList} >
                <li></li>
            </ul>


        </>
    )
}
