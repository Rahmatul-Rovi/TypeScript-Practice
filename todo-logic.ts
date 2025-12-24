// todo.ts
interface ITodo {
    id: number;
    task: string;
    isCompleted: boolean;
}

let todos: ITodo[] = [
    { id: 1, task: "Learn TypeScript", isCompleted: false },
    { id: 2, task: "Push code to GitHub", isCompleted: false }
];

function addTask(newTask: string): void {
    const newTodo: ITodo = {
        id: todos.length + 1,
        task: newTask,
        isCompleted: false
    };
    todos.push(newTodo);
    console.log("Task Added!");
}

addTask("Finish the project");
console.log("My Todo List:", todos);