import React from 'react';

const Modal = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        {children}
        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;