import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Site Name and Welcome Message */}
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-white mt-8">The Crystalline Archive</h1>
        <p className="text-lg text-gray-300 mt-4">
          Welcome to the ultimate hub for FFXIV role-playing and community collaboration!
        </p>
      </div>
    </div>
  );
}