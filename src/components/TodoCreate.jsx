import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="mb-4 mt-10 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 text-xs"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    );
};
export default TodoCreate;
