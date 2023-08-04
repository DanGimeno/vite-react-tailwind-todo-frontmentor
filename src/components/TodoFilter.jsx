const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-4">
            <div className="flex justify-center gap-4 rounded-md bg-white py-4 text-center text-sm font-semibold text-gray-600">
                <button
                    onClick={() => changeFilter("all")}
                    className={`${
                        filter === "all"
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter("active")}
                    className={`${
                        filter === "active"
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={`${
                        filter === "completed"
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
