import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Accordion from './pages/Accordion';
import ImageSlider from './pages/ImageSlider';
import DisplayList from './pages/DisplayList';
import FilterSearch from './pages/FilterSearch';
import SimpleCounter from './pages/SimpleCounter';
import Header from './components/Header';
import Footer from './components/Footer';
import Checklist from './pages/Checklist'
import Login from './pages/Login';
import DataApi from './pages/DataApi';
import ContextAPI from './pages/ContextAPI';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/image-slider" element={<ImageSlider />} />
              <Route path="/list" element={<DisplayList />} />
              <Route path="/search-filter" element={<FilterSearch />} />
              <Route path="/simple-counter" element={<SimpleCounter />} />
              <Route path="/checklist" element={<Checklist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/data-api" element={<DataApi />} />
              <Route path="/context-api" element={<ContextAPI />} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
