"use client";
import { FormEvent, useState } from "react";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.SERVER_URL}/query`, { query });
    setResults(response.data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Employee Query Interface</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
            className="w-full px-4 py-2 border rounded mb-4 text-black"
          />
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
        {results && (
          <div className="bg-gray-50 p-4 rounded shadow text-black">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <pre className="whitespace-pre-wrap">{JSON.stringify(results, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
