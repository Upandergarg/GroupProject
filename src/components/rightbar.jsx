import React from 'react';
import { Link } from 'react-router-dom';
const rightbar = () => {
  return (
    <aside className="bg-white md:sticky md:top-20 rounded-lg p-3 md:block hidden">
      <nav className="text-base space-y-1">
        <Link to='fir' className="block px-3 py-2 rounded hover:bg-gray-100">File FIR</Link>
        <Link  to='PKMKC' className="block px-3 py-2 rounded hover:bg-gray-100">Rural Complaint</Link>
        <Link  to='suggestion' className="block px-3 py-2 rounded hover:bg-gray-100">Suggestion to Government</Link>
        <Link to='PKMKC' className="block px-3 py-2 rounded hover:bg-gray-100">Complaint Against Govt</Link>
        <Link to='MeraBhai' className="block px-3 py-2 rounded hover:bg-gray-100">Good Deeds </Link>
          <Link to='AURAAA' className="block px-3 py-2 rounded hover:bg-gray-100">Aura Points </Link>
        <Link to='Narii' className="block px-3 py-2 rounded hover:bg-gray-100">Women Safety</Link>
        <Link to='DexterHaTu' className="block px-3 py-2 rounded hover:bg-gray-100">Mental Health Helpline</Link>
      </nav>
    </aside>
  );
};

export default rightbar;