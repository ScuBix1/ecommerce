import Link from 'next/link';
import {Search} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="px-4 py-4 md:px-12 md:py-6 bg-white text-black">
      <div className="flex justify-between items-center">
        <Link href="/" className="hidden md:inline-block text-lg font-semibold">
          ZWatches
        </Link>
        <div className="relative max-w-[300px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4" />
          </div>
          <input
            className="h-9 relative pl-10 border border-black/[0.7] text-sm rounded-xl py-2 px-3 focus:border-none bg-transparent"
            type="text"
            placeholder="Recherche..."
          />
        </div>
        <Link href="/add-product" passHref>
          <button className="bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer">
            Ajouter un produit
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
