import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
  <input
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="flex-1 px-4 py-2 border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    placeholder=" Add a new task"
  />

  <button
    type="submit"
    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-indigo-600 transition duration-200"
  >
    ➕ Add Task
  </button>
</form>

  );
}
