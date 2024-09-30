import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [question, setQuestion] = useState(0);

  return (
    <UserContext.Provider value={{ question, setQuestion }}>
      {children}
    </UserContext.Provider>
  );
};
