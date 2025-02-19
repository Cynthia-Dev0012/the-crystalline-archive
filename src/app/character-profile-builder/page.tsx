import Navbar from '../components/Navbar';

export default function CharacterProfileBuilder() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-white mt-8">Character Profile Builder</h1>
        <p className="text-lg text-gray-300 mt-4">
          Create and customize your FFXIV character profile.
        </p>
      </div>
    </div>
  );
}