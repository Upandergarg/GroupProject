import React from 'react';

const leftbar = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-4">
      <section className="bg-white rounded-lg p-4">
        <h3 className="font-semibold mb-2">Latest News</h3>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            <a className="text-blue-600 hover:underline" href="https://timesofindia.indiatimes.com/city/chandigarh" target="_blank" rel="noopener noreferrer">
              Chandigarh News - TOI
            </a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="https://www.tribuneindia.com/news/chandigarh" target="_blank" rel="noopener noreferrer">
              Tribune Chandigarh
            </a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="https://indianexpress.com/section/cities/chandigarh/" target="_blank" rel="noopener noreferrer">
              Indian Express Chandigarh
            </a>
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Crime Heatmap</h3>
        <img src={Map} alt="Crime Heatmap" />
      </section>
    </aside>
  );
};

export default leftbar;