import React, { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import "./styles.css"
import {TbSun, TbMoon} from 'react-icons/tb'

const ContextAPI = () => {
  const {darkTheme, toggleTheme} = useContext(ThemeContext);
  
  const themeStyles = {
    backgroundColor: !darkTheme ? "var(--color-primary-variant)" : "#fff",
    color: !darkTheme ? "#fff" : "var(--color-primary-variant)",
    border: !darkTheme ? "1px solid #fff" : "1px solid var(--color-primary-variant)"
  };

  return (
    <>
      <div style={themeStyles} className="contextApi-container">
        <span className="icon">
          {darkTheme ? (<TbSun/>) : (<TbMoon />)} 
        </span>
        <button style={themeStyles} className="btn-theme" onClick={toggleTheme}>
           {darkTheme ? (<h1>Enable Dark Theme</h1>) : (<h1>Enable Light Theme</h1>)}
        </button>
        
      </div>
    </>
    );
};

export default ContextAPI;
