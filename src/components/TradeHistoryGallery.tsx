import React, { useState } from 'react';
import { XIcon } from 'lucide-react';

interface TradeHistoryGalleryProps {
  images: string[]; // Array of image URLs
}

const TradeHistoryGallery: React.FC<TradeHistoryGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 8;

  // Calculate the index of the first and last image to be shown
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const closeModal = () => setSelectedImage(null);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-4 py-8 bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Trade History Screenshots
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentImages.map((image, index) => (
          <div key={index} className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)} // Set selected image for full-screen view
            >
              <img
                src={image}
                alt={`Trade history ${index + 1}`}
                className="object-cover w-full h-64"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white transition-colors ${currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Previous
        </button>
        <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white transition-colors ${currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-xs sm:max-w-sm w-full p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black sm:p-2 border-2 rounded-md"
              onClick={closeModal} // Close modal on click
            >
              <XIcon className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full screen trade history"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeHistoryGallery;
