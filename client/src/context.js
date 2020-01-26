import React, { useState } from 'react';

const Context = React.createContext();

export function ContextController({ children }) {
  const [state, setState] = useState('');

  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  );
}