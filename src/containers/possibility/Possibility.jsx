import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Discover the incredible potential of GPT-3, whose capabilities are so vast that they can be applied to a wide range of use cases and possibilities that are difficult to imagine. From text completion to language translation, question-answering, creative writing, and more, GPT-3 offers a vast range of possibilities for innovation and growth in various fields, including customer service, e-commerce, education, and beyond. Explore the possibilities of GPT-3 today and see how it can help take your business or organization to the next level.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
