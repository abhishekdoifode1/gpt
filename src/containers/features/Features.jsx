import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'GPT-3 skepticism can be addressed by highlighting its massive training data, proven applications, and potential to transform language processing.',
  },
  {
    title: 'Personalization at Scale',
    text: "GPT-3's ability to generate personalized responses can be leveraged to improve customer engagement and drive business growth.",
  },
  {
    title: 'The Art of Language',
    text: "GPT-3's creative writing capabilities can be leveraged for various applications such as story writing, blog writing, and more.",
  },
  {
    title: 'Fine-Tuning GPT-3 for Your Specific Needs',
    text: 'GPT-3 can be fine-tuned for specific tasks and domains to meet the unique needs of a business or organization.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
