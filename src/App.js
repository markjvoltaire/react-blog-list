import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from './components/BlogCard/BlogCard';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
      console.log(data);
    };
    return () => {
      fetchData();
    };
  }, []);

  return (
    <section className="main">
      <Header />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
