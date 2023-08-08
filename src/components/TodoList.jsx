import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => {
                        return (
                            <Draggable
                                key={todo.id}
                                draggableId={`${todo.id}`}
                                index={index}
                            >
                                {(draggableProvider) => (
                                    <TodoItem
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                    />
                                )}
                            </Draggable>
                        );
                    })}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};
export default TodoList;
