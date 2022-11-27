import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorPage from './pages/AuthorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SingleBlogPage from './pages/SingleBlogPage';
import TopicWiseBlogPage from './pages/TopicWiseBlogPage';
import UserHomePage from './pages/UserHomePage';
import WriteABlog from './pages/WriteABlogPage';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/author/:authorName' element={<AuthorPage />} />
          <Route path='/:topic' element={<TopicWiseBlogPage />} />
          <Route path='/:author/:blogTitle' element={<SingleBlogPage />} />
          <Route path='/write' element={<WriteABlog />} />
          <Route path='/dashboard/:userName' element={<UserHomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
