import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/* const initialStateTodos = [
    {
        id: 1,
        title: "Complete online Javascript bluuweb Curse",
        completed: true,
    },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutos meditation", completed: false },
    { id: 4, title: "Pick up groceries", completed: true },
    { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
    { id: 6, title: "Comprar servilletas", completed: false },
]; */

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearComplete = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevtask) =>
            reorder(prevtask, source.index, destination.index)
        );
    };

    return (
        <div className="mx-auto min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:max-w-xl md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]">
            <Header />

            <main className="container m-5 mx-auto px-6">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoCreate createTodo={createTodo} />
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                    <TodoComputed todos={todos} clearComplete={clearComplete} />
                    <TodoFilter changeFilter={changeFilter} filter={filter} />
                </DragDropContext>
            </main>

            <footer className="container mx-auto mt-8 px-6 text-center text-sm text-gray-600">
                <p>Drag and drop to reorder list</p>
            </footer>
        </div>
    );
};

export default App;
