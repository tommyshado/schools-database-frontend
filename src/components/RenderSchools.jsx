export function RenderSchools({ foundSchools }) {
  return (
    <>
      <table className="table caption-top">
        <caption>List of schools</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Region</th>
            <th scope="col">Learners available</th>
            <th scope="col">Teachers available</th>
          </tr>
        </thead>
        <tbody>
          {foundSchools.map((results) => (
            <tr key={results.id}>
              <td>{results.name}</td>
              <td>{results.region}</td>
              <td>{results.learners_count}</td>
              <td>{results.teachers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
