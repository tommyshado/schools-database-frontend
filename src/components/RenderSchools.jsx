export function RenderSchools({ foundSchools }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full shadow-md">
        <thead>
          <tr>
            <th className="bg-gray-100 text-left font-semibold py-2 px-4">Name</th>
            <th className="bg-gray-100 text-left font-semibold py-2 px-4">Region</th>
            <th className="bg-gray-100 text-left font-semibold py-2 px-4">Learners available</th>
            <th className="bg-gray-100 text-left font-semibold py-2 px-4">Teachers available</th>
          </tr>
        </thead>
        <tbody>
          {foundSchools.map((results) => (
            <tr key={results.id}>
              <td className="border-b border-gray-200 py-2 px-4">{results.name}</td>
              <td className="border-b border-gray-200 py-2 px-4">{results.region}</td>
              <td className="border-b border-gray-200 py-2 px-4">{results.learners_count}</td>
              <td className="border-b border-gray-200 py-2 px-4">{results.teachers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
