import Navbar from '../components/Navbar';
import Link from 'next/link';


export interface FCAd {
  id: number;
  fc_name: string;
  server: string;
  description: string;
  tags: string; // Added tags property
  created_at: string; // or Date if you parse it
}

export default async function FreeCompanies() {
  const response = await fetch('http://localhost:3000/api/fc-ads', { cache: 'no-store' });
  const fcAds: FCAd[] = await response.json();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-white mt-8">Free Companies</h1>
        <p className="text-lg text-gray-300 mt-4">
          Explore and join Free Companies in FFXIV.
        </p>

        {/* Button to Create FC Ad */}
        <div className="mt-8">
          <Link
            href="/free-companies/create-ad"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Create Free Company Ad
          </Link>
        </div>

        {/* Display FC Ads in a Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {fcAds.map((ad) => (
            <div key={ad.id} className="bg-gray-800 p-4 rounded-lg text-left">
              <h2 className="text-2xl font-bold text-white">{ad.fc_name}</h2>
              <p className="text-gray-400">{ad.server}</p>
              <p className="text-gray-300 mt-2">{ad.description}</p>
              <div className="mt-4">
                <span className="text-sm text-gray-400">RP Types:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {ad.tags
                    ? ad.tags.split(',').map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {tag.trim()}
                      </span>
                    ))
                    : <span className="text-gray-400">No tags provided</span>}
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href={`/free-companies/${ad.id}`}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
