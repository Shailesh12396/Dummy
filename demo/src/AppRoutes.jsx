import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import SideBar from './Components/Chats/SideBar';
import ChatWindow from './Components/Chats/ChatWindow';

function AppRoutes({ selectedUser, onUserSelect }) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={
        <div className="flex h-screen">
          <SideBar onUserSelect={onUserSelect} />
          {selectedUser ? (
            <ChatWindow user={selectedUser} />
          ) : (
            <div className="flex items-center justify-center flex-1 p-4 text-center font-bold text-2xl text-green-900">
              Select a user to start chatting!
            </div>
          )}
        </div>
      } />
    </Routes>
  );
}

export default AppRoutes;
