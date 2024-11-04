import React from 'react';

const users = [
  { id: 1, name: 'Contact 1' },
  { id: 2, name: 'Contact 2' },
  { id: 3, name: 'Contact 3' },
];

function SideBar({ onUserSelect }) {
  return (
    <div className="w-1/3 bg-gray-100 border-r border-gray-300 p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-green-800">Chats</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onUserSelect(user)}
            className="p-4 border-b border-green-900 cursor-pointer hover:bg-green-200"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default SideBar;