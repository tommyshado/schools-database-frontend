export function RenderSchools({ foundSchools }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Learners available</th>
            <th>Teachers available</th>
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
