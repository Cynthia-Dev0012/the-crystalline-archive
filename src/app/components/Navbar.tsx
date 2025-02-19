import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/free-companies" className="text-white hover:text-gray-400">
              Free Companies
            </Link>
          </li>
          <li>
            <Link href="/character-profile-builder" className="text-white hover:text-gray-400">
              Character Profile Builder
            </Link>
          </li>
          <li>
            <Link href="/lore-workshop" className="text-white hover:text-gray-400">
              Lore Workshop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;