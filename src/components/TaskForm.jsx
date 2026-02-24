import React, { useState, useEffect } from 'react'

const Taskform = () => {

  // ✅ Task input state
  const [task, setTask] = useState("");

  // ✅ Tasks state (load from localStorage on first render)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // ✅ Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleTask() {
    if (task.trim() === "") {
      alert("Please enter your Task");
      return;
    }

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false
      }
    ]);

    setTask("");
  }

  function handleDelete(indexToDelete) {
    const updatedTasks = tasks.filter((item, index) => {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  }

  function handleToggle(indexToToggle) {
    const updatedTasks = tasks.map((item, index) => {
      if (index === indexToToggle) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <div className='mt-6 flex flex-col sm:flex-row gap-3'>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="text"
          placeholder='Enter your task'
        />

        <button
          onClick={handleTask}
          className='bg-blue-600 text-white px-7 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'
        >
          Task Added
        </button>
      </div>

      <div className="mt-6">
        {tasks.map((delts, index) => (
          <div
            key={index}
            className='p-3 bg-gray-300 rounded-lg mb-2 flex justify-between items-center'
          >
            <span
              className={delts.completed ? "line-through text-gray-500" : ""}
            >
              {delts.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(index)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Complete
              </button>

              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Taskform