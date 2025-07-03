import React from 'react'

  const Watchlist = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>Ratings</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          
          {/* Sample Movie Element */}
          <tr className="hover:bg-gray-50">
            <td className="flex items-center px-6 py-4 font-normal text-gray-900">
              <img
                
                className="h-[6rem] w-[10rem] object-cover mr-4"
                src={`https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D`}
                alt="Poster"
              />
              <div className="font-medium text-gray-700 text-sm">
                Placeholder
              </div>
            </td>
            <td className="px-6 py-4">Avg</td>
            <td className="px-6 py-4">Popularity</td>
            <td className="px-6 py-4">Genre</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};



export default Watchlist;