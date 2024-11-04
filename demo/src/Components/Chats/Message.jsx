import React from 'react';

function Message({ message, isSent }) {
  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Message;
