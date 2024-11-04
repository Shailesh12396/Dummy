import React from 'react';

function ChatHeader({ user }) {
  return (
    <div className="flex items-center justify-between p-4 bg-green-700 border-b border-green-900">
      {user ? (
        <>
          <div className='text-white'>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm">Online</p>
          </div>
        </>
      ) : (
        <h2 className="text-lg font-semibold">Select a user</h2>
      )}
    </div>
  );
}

export default ChatHeader;