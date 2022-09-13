import React, { createContext, useState } from "react";

//Função que constrói o Provider e também permite consumir dados globais.
export const ThemeContext = createContext();

//Componente Provider para passar os valores para os childrens.
const ThemeProvider = ({children}) => {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
      setDarkTheme(darkTheme => !darkTheme);
  }

  return (
    <>
        <ThemeContext.Provider value={{darkTheme, toggleTheme}} >
           {children}
        </ThemeContext.Provider>
    </>
    );
};

export default ThemeProvider;
