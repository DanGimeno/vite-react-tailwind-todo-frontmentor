const TodoComputed = ({ todos, clearComplete }) => {
    const itemsLeft = todos.filter((todo) => !todo.completed).length;

    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 text-xs text-gray-600">
            <span>{itemsLeft} Items Left</span>
            <button onClick={clearComplete}>Clear Completed</button>
        </section>
    );
};
export default TodoComputed;
