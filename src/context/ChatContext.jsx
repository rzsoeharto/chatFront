import { useState } from "react";
import { createContext } from "react";

const ChatContext = createContext();

export default ChatContext;

export const ChatProvider = ({ children }) => {
  const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/test/");

  const contextData = {
    chatSocket: chatSocket,
  };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
};
