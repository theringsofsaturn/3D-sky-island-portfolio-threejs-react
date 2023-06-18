import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, date }) => {
  return (
    <div className="blog-card">
      <img
        src="https://th.bing.com/th/id/R.b6f69b8f036395b6349a40fd3906cb64?rik=YeM%2bN5tRwRHPaQ&pid=ImgRaw&r=0"
        alt={title}
      />{' '}
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
