import Navbar from "./components/Navbar";
import Schools from "./components/Schools";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Schools />
      </div>
    </>
  );
}
