import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="display-1">React Router</h1>
      <Link className="nav-link" to="/about">
        About
      </Link>
      {' '}
    </div>
  );
}
