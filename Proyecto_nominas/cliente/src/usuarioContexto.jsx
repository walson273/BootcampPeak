

import React, { createContext, useState, useContext } from 'react';

const UsuarioContext = createContext(null);

export default function UsuarioProvider ({ children }) {
  
  const [usuario, setUsuario] = useState(null);

  const login = (usuarioInfo) => {

    setUsuario(usuarioInfo);
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export function useUsuario () {
  return useContext(UsuarioContext);
};
