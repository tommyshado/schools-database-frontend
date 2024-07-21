import { Link } from "react-router-dom";

export function AddSchool({
  onCreateSchoolHandler,
  onSchoolNameHandler,
  onSchoolRegionHandler,
  nameValue,
  regionValue,
}) {
  return (
    <>
      <form
        onSubmit={onCreateSchoolHandler}
        className="flex flex-col items-center mt-4 mb-4"
      >
        <div className="justify-center items-center">
          <div>
            <span>Enter school name</span>
            <br />
            <input
              value={nameValue}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              name="name"
              onChange={onSchoolNameHandler}
              placeholder="Enter school name"
            />
          </div>
          <div>
            <span>Enter school region</span>
            <br />
            <input
              value={regionValue}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              name="region"
              onChange={onSchoolRegionHandler}
              placeholder="Enter school region"
            />
          </div>
          <div className="flex justify-center items-center mb-4 space-x-12">
            <button
              className="bg-gray-600 text-white p-2 rounded"
              type="submit"
            >
              Add school
            </button>
            <span>
              <Link to="/" className="hover:underline">Cancel</Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
