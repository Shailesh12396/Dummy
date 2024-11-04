import React, { useState } from 'react';

function MessageInput() {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      console.log('Message sent:', input);
      setInput('');
    }
  };

  return (
    <div className="p-4 border-t border-gray-300 flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
