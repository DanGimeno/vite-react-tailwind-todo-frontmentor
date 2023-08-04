import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                );
            })}
        </div>
    );
};
export default TodoList;
