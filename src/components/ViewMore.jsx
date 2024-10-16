import React from 'react';
import { Link } from 'react-router-dom';
const ViewMore = () => {
  return (
    <div className='flex flex-col justify-center items-center z-[10] py-16'> {/* Ensure the entire section is flex */}
      <Link to = '/ArtWorks' >
      <button className="text-white font-bold py-2 hover:text-gray-200  px-8 rounded text-xl border-1 border-transparent transition duration-300 hover:border-white">
      View More Artworks
        </button>
      </Link> 
    </div>
  );
}

export default ViewMore;
