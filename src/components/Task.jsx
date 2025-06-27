export default function Task({ id, title, completed, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-indigo-50 shadow-lg rounded-xl mb-4 transition-all duration-300">
      <span
        className={`text-lg font-medium ${
          completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {title}
      </span>
      <div className="space-x-2 flex">
        <button
          className={`px-4 py-1 rounded-md font-semibold text-white transition duration-200 ${
            completed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => onToggle(id)}
        >
          {completed ? "Undo" : "Done"}
        </button>

        <button
          className="px-4 py-1 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
