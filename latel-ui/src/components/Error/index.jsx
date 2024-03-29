import { Link } from "react-router-dom";

export default function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-56">
      <h1 className="text-6xl font-black pb-2">Error</h1>
      <div className="pb-5">
        <p className="max-w-5xl font-bold">{message}</p>
        <Link to="/" className="w-full block text-blue-500 hover:underline text-center">Go back to home</Link>
      </div>
    </div>
  );
}
