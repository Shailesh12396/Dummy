import React from 'react';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import Message from './Message';

function ChatWindow({ user }) {
  return (
    <div className="w-2/3 flex flex-col h-full">
      <ChatHeader user={user} />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <Message message="Hello! How are you?" isSent={false} />
        <Message message="I'm good, thanks! How about you?" isSent={true} />
        <Message message="Doing great!" isSent={false} />
      </div>
      <MessageInput />
    </div>
  );
}

export default ChatWindow;