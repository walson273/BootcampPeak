

import React, { createContext, useState, useContext, useEffect } from 'react';

const UsuarioContext = createContext(null);

export default function UsuarioProvider ({ children }) {

  const [usuarioActual, setUsuario] = useState({
    
    "id": "1"});

  const login = async (usuarioInfo) => {

    
    setUsuario(
      
      (prevData) => ({...prevData, "id":usuarioInfo.IDUser})
      
      );
    
  };

  useEffect(()=>{console.log(usuarioActual)},[usuarioActual]);

  const logout = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContext.Provider value={{ usuarioActual, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export function useUsuarioContexto () {
  return useContext(UsuarioContext);
};
