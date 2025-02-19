import Navbar from '../../components/Navbar';
import { query } from '../../lib/db';

export interface FCAd {
  id: number;
  fc_name: string;
  server: string;
  description: string;
  tags: string;
  created_at: string; // or Date if you parse it
}

export default async function FCAdPage({ params }: { params: { id: string } }) {
  const { rows } = await query('SELECT * FROM fc_ads WHERE id = $1', [params.id]);
  const fcAd: FCAd = rows[0];

  if (!fcAd) {
    return (
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <div className="p-4 text-center">
          <h1 className="text-4xl font-bold text-white mt-8">Free Company Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-white mt-8">{fcAd.fc_name}</h1>
        <p className="text-gray-400">{fcAd.server}</p>
        <p className="text-gray-300 mt-2">{fcAd.description}</p>
        <div className="mt-4">
          <span className="text-sm text-gray-400">RP Types:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {fcAd.tags
              ? fcAd.tags.split(',').map((tag: string, index: number) => (
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

      </div>

      <div className="mt-8 max-w-2xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-white">About Us</h2>
        <p className="text-gray-300 mt-2">{fcAd.description}</p>

        <h2 className="text-2xl font-bold text-white mt-8">Events</h2>
        <p className="text-gray-300 mt-2">No upcoming events.</p>

        <h2 className="text-2xl font-bold text-white mt-8">Members</h2>
        <p className="text-gray-300 mt-2">No member list available.</p>

        <h2 className="text-2xl font-bold text-white mt-8">Rules</h2>
        <p className="text-gray-300 mt-2">No rules provided.</p>
      </div>
      
      <div className="mt-8">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            disabled
          >
            Edit (Coming Soon)
          </button>
        </div>
    </div>
    
  );
}