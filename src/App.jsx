import React from 'react';
import './App.css';
import Home  from "./components/Home";
import CodeEditor from "./components/CodeEditor";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from './components/Footer';

export default function App() {
  const html = "<h1>Hello World</h1>"
  return (
    <BrowserRouter>
    <div>
      <Routes>
    <Route path="/" element={<Home />}/>
      <Route
        path="messages"
        element={<Home />}
      />
      <Route
        path="editor"
        element={<CodeEditor />}
      />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>

  );
}
