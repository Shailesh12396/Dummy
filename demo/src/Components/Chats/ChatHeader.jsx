import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ChatHeader({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="flex items-center justify-between p-4 bg-green-700 border-b border-green-900 relative">
      {user ? (
        <div className="text-white">
          <Link to={`/profile/${user.id}`}>
            <h2 className="text-lg font-semibold cursor-pointer">{user.name}</h2>
          </Link>
          <p className="text-sm">Online</p>
        </div>
      ) : (
        <h2 className="text-lg font-semibold text-white">Select a user</h2>
      )}

      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="text-white text-xl focus:outline-none"
        >
          &#x22EE;
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
            <Link
              to={`/profile/${user?.id}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                onLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
