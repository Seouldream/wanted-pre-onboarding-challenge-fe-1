import { Link, Outlet } from 'react-router-dom';

export default function Tasks({
  tasks,
}) {
  return (
    <div>
      <nav>
        <ul>
          {tasks.map((task) => (
            <Link
              to={`/tasks/${task.id}`}
              key={task.id}
            >
              <li>
                {task.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
