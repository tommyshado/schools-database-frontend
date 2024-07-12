export function AddSchool({
  onCreateSchoolHandler,
  onSchoolNameHandler,
  onSchoolRegionHandler,
}) {
  return (
    <>
      <form onSubmit={onCreateSchoolHandler}>
        <div>
          <div>
            <span>Enter school name</span>
            <br />
            <input
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
              type="text"
              name="region"
              onChange={onSchoolRegionHandler}
              placeholder="Enter school region"
            />
          </div>
          <button type="submit">Add school</button>
        </div>
      </form>
    </>
  );
}
