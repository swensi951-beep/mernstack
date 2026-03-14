import React from 'react';
import './BlogSection.css';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Organic Farming is the Future of Agriculture",
      date: "March 10, 2026",
      author: "Admin",
      excerpt: "Organic farming is not just a trend, it's a necessity for our soil health and future generations...",
      image: "/assets/images/instagram2.jpg" // Make sure to add images in this path
    },
    {
      id: 2,
      title: "5 Best Summer Vegetables to Grow in Your Garden",
      date: "March 05, 2026",
      author: "Svensi",
      excerpt: "Summer is the perfect time to start your mini kitchen garden with these easy-to-grow veggies...",
      image: "/assets/images/instagram3.png"
    },
    {
      id: 3,
      title: "How to Store Fruits to Keep Them Fresh Longer",
      date: "Feb 28, 2026",
      author: "Admin",
      excerpt: "Learn the secrets of keeping your organic produce fresh and crisp for up to two weeks...",
      image: "/assets/images/instagram4.png"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <span className="subtitle">Our Insights</span>
          <h2 className="about-title"> 
            Latest Articles From 
             &nbsp;<span className="gradient-text">Our Blog</span>
          </h2>
          <p>Read our latest news and organic farming tips</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-img">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">
                  <Calendar size={14} /> {blog.date}
                </div>
              </div>
              
              <div className="blog-info">
                <div className="blog-meta">
                  <span><User size={14} /> By {blog.author}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read-more-btn">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;