'use client';

import { useState } from 'react';

export default function CreateFCAd() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const fcName = formData.get('fcName') as string;
    const server = formData.get('server') as string;
    const description = formData.get('description') as string;
    const tags = (formData.get('tags') as string) || ''; // Default to empty string if null

    try {
      const response = await fetch('/api/fc-ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fcName, server, description, tags }),
      });

      if (response.ok) {
        setMessage('Ad submitted successfully!');
      } else {
        setMessage('Failed to submit ad. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting ad:', error);
      setMessage('Failed to submit ad. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white text-center mt-8">
        Create Free Company Ad
      </h1>
      <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fcName" className="block text-white mb-2">
            Free Company Name
          </label>
          <input
            type="text"
            id="fcName"
            name="fcName"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Enter Free Company name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="server" className="block text-white mb-2">
            Server
          </label>
          <input
            type="text"
            id="server"
            name="server"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Enter server name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Describe your Free Company"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block text-white mb-2">
            RP Types (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="e.g., Casual, Lore-Heavy, Raiding"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Ad
        </button>
        {message && <p className="mt-4 text-white">{message}</p>}
      </form>
    </div>
  );
}