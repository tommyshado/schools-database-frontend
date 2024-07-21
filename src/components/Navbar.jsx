import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Schools Management System</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/add-school" className="text-white">Add School</Link>
          <Link to="/search-for-school" className="text-white">Search</Link>
        </div>
      </div>
    </nav>
  );
}