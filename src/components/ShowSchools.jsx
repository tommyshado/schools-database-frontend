export function ShowSchools({ foundSchools }) {
  return (
    <>
      {foundSchools.map((results) => {
        return (
          <div key={results.id}>
            <p>{results.name}</p>
            <p>{results.region}</p>
            <p>{results.learners_count}</p>
            <p>{results.teachers_count}</p>
          </div>
        );
      })}
    </>
  );
}
