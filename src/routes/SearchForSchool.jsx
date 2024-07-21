export function SearchForSchool({
  onFindSchoolHandler,
  onNameHandler,
  onRegionHandler,
}) {
  return (
    <>
      <form onSubmit={onFindSchoolHandler}>
        <div>
          <input
            type="text"
            name="name"
            onChange={onNameHandler}
            placeholder="Enter school name"
          />
          <input
            type="text"
            name="region"
            onChange={onRegionHandler}
            placeholder="Enter school region"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
}
