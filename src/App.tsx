import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">React + TypeScript + Vite</h1>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  );
}
