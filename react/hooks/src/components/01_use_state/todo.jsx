import { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, text: inputValue } : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInputValue("");
  };

  const handleToggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, text) => {
    setIsEditing(true);
    setCurrentTodoId(id);
    setInputValue(text);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodoId(null);
    setInputValue("");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          className="form-control me-2"
          placeholder={isEditing ? "Edit your todo" : "Add a new todo"}
        />
        <button type="submit" className="btn btn-primary me-2">
          {isEditing ? "Save" : "Add"}
        </button>
        {isEditing && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        )}
      </form>
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "list-group-item-success" : ""
              }`}
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => handleToggleCompletion(todo.id)}
              >
                {todo.text}
              </span>
              <div>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">No todos available</li>
        )}
      </ul>
    </div>
  );
};

export default Todo;
