import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-100 transition-all duration-1000 dark:border-b-gray-900 dark:bg-gray-800">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 border-gray-200 transition-all duration-1000 dark:border-gray-700 ${
                    completed
                        ? "flex items-center justify-center bg-gradient-to-br from-blue-300 via-indigo-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow text-xs  ${
                    completed
                        ? "text-gray-400 line-through transition-all duration-1000 dark:text-gray-600"
                        : "text-gray-800 transition-all duration-1000 dark:text-gray-200"
                }`}
            >
                {title}
            </p>
            <button onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};
export default TodoItem;
