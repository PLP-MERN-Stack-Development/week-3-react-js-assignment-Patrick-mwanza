import { useEffect, useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import Button from './components/Button';
import Card from './components/Card';
import Layout from './components/Layout';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, title: 'Hands on React', completed: false },
          { id: 2, title: 'Hands on Express', completed: true },
        ];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((curr) =>
      curr.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((curr) => curr.filter((t) => t.id !== id));
  };

  const addTask = (title) => {
    setTasks((curr) => [
      { id: Date.now(), title, completed: false },
      ...curr,
    ]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
         Task Manager
      </h1>

<Card className="mb-6 bg-white shadow-lg">
  <TaskForm onAdd={addTask} />

  <div className="flex justify-center gap-3 mt-4 flex-wrap">
    <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
    <Button variant="primary" onClick={() => setFilter('active')}>Active</Button>
    <Button variant="danger" onClick={() => setFilter('completed')}>Completed</Button>
  </div>
</Card>

      {filteredTasks.length ? (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      ) : (
        <Card className="bg-yellow-100">
          <p className="text-yellow-800 font-semibold text-center">No tasks available</p>
        </Card>
      )}
    </Layout>
  );
}
