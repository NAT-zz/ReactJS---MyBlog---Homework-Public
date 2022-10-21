import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home  from './routes/Home';
import Detail from './routes/Read';
import Edit from './routes/Edit';
import Header from './component/header';
import Create from './routes/Create';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div class='container'>
    <Routes>
          <Route path="/" element={<Home />} />,
          <Route path='/posts/create' element={<Create />} />,
          <Route path="/posts/detail/:id" element={<Detail />} />,
          <Route path="/posts/edit/:id" element={<Edit />} />,
      </Routes>
      </div>
    </BrowserRouter>
  )
}
// - Post bài viết
export default App;
