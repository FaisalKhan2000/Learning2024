import { useReducer, useState } from "react";

const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  COMPLETED: "completed",
  EDIT: "edit",
};

const initialState = [];

const reducer = (tasks, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...tasks,
        { id: Date.now(), task: action.payload.name, completed: false },
      ];

    case ACTIONS.DELETE:
      return tasks.filter((task) => task.id !== action.payload.id);

    case ACTIONS.COMPLETED:
      return tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case ACTIONS.EDIT:
      return tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.newTask }
          : task
      );
    default:
      return tasks;
  }
};

const UseReducerExample2 = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [editTaskId, setEditTaskId] = useState(null); // Track the task being edited
  const [taskValue, setTaskValue] = useState(""); // State for both adding and editing tasks

  const addTask = () => {
    if (taskValue.trim()) {
      dispatch({ type: ACTIONS.ADD, payload: { name: taskValue } });
      setTaskValue(""); // Clear input after adding
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  };

  const completeTask = (id) => {
    dispatch({ type: ACTIONS.COMPLETED, payload: { id } });
  };

  const startEditTask = (id, task) => {
    setEditTaskId(id);
    setTaskValue(task); // Load the task value into the input for editing
  };

  const editTask = () => {
    if (taskValue.trim()) {
      dispatch({
        type: ACTIONS.EDIT,
        payload: { id: editTaskId, newTask: taskValue },
      });
      setEditTaskId(null); // Exit edit mode
      setTaskValue(""); // Clear input after editing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTaskId) {
      editTask(); // If editing, update the task
    } else {
      addTask(); // If adding, create a new task
    }
  };

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-light border-0 rounded-3 p-4 shadow-lg mb-4 ">
        <h3 className="card-title text-center mb-4">
          {editTaskId ? (
            <>
              <i className="bi bi-pencil-square me-2"></i>Edit Task
            </>
          ) : (
            <>
              <i className="bi bi-list-ul me-2"></i>Todo List
            </>
          )}
        </h3>
        <form onSubmit={handleSubmit} className="d-flex flex-row">
          <input
            type="text"
            name="task"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            className="form-control me-2 rounded-3"
            style={{
              border: "2px solid #495057",
              backgroundColor: "#343a40",
              color: "#f8f9fa",
              padding: "0.75rem 1.25rem",
            }}
            placeholder={editTaskId ? "Edit Task" : "Enter Task"}
          />
          <button
            type="submit"
            className={`btn btn-${
              editTaskId ? "warning" : "primary"
            } d-flex align-items-center rounded-3`}
            style={{
              minWidth: "150px",
              padding: "0.75rem 1.25rem",
              border: "2px solid transparent",
            }}
          >
            {editTaskId ? (
              <>
                <i className="bi bi-save me-2"></i>Save Changes
              </>
            ) : (
              <>
                <i className="bi bi-plus-circle me-2"></i>Add Task
              </>
            )}
          </button>
        </form>

        <div>
          {tasks.length ? (
            <ul className="list-group mt-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center mb-2 rounded-3"
                  style={{
                    backgroundColor: task.completed ? "#495057" : "#212529",
                    color: "#f8f9fa",
                    border: "2px solid #495057",
                  }}
                >
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      fontWeight: "bold",
                    }}
                  >
                    {task.task}
                  </span>
                  <div>
                    <button
                      onClick={() => completeTask(task.id)}
                      className={`btn btn-sm me-2 ${
                        task.completed ? "btn-success" : "btn-outline-success"
                      } rounded-circle`}
                      style={{
                        padding: "0.5rem 1rem",
                        border: "2px solid transparent",
                      }}
                    >
                      <i className="bi bi-check"></i>
                    </button>
                    <button
                      onClick={() => startEditTask(task.id, task.task)}
                      className="btn btn-sm btn-outline-warning me-2 rounded-circle"
                      style={{
                        padding: "0.5rem 1rem",
                        border: "2px solid transparent",
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="btn btn-sm btn-outline-danger rounded-circle"
                      style={{
                        padding: "0.5rem 1rem",
                        border: "2px solid transparent",
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h5 className="text-center text-muted mt-4">No Tasks Available</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseReducerExample2;
