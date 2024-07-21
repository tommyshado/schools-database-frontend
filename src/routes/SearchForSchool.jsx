import { Link } from "react-router-dom";


export function SearchForSchool({
  onFindSchoolHandler,
  onNameHandler,
  onRegionHandler,
  resetFoundSchools,
}) {
  return (
      <form onSubmit={onFindSchoolHandler}>
        <div className="flex space-x-4 justify-center items-center mb-4">
          <span>
            <input
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              name="name"
              onChange={onNameHandler}
              placeholder="Enter school name"
            />
          </span>
          <span>
            <input
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              name="region"
              onChange={onRegionHandler}
              placeholder="Enter school region"
            />
          </span>
          <span>
            <button
              className="bg-gray-600 text-white p-2 rounded mb-4"
              type="submit"
            >
              Search
            </button>
          </span>
          <span>
            <Link to="/" onClick={resetFoundSchools} className="hover:underline">
              Reset
            </Link>
          </span>
        </div>
      </form>
  );
}
