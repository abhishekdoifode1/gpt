import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="How GPT-3 is Revolutionizing the Field of Natural Language Processing" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Exploring the Limits of AI: The Power of GPT-3" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Unlocking the Potential of GPT-3: Tips and Tricks for Getting the Most Out of Your AI Tool" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and the Future of Content Creation: How AI is Revolutionizing the Way We Write" />
      </div>
    </div>
  </div>
);

export default Blog;
