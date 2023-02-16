import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is OpenAI's state-of-the-art language model with capabilities in text generation, translation, and answering questions. It is trained on large amounts of text data and can generate human-like responses. It has potential uses in content creation, chatbots, virtual assistants, and more." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 can enhance chatbots' ability to understand and respond to complex questions with relevant, personalized responses. Chatbots using GPT-3 provide advanced, human-like conversational experiences" />
      <Feature title="Knowledgebase" text="A knowledge base using GPT-3 provides accurate and relevant responses, generates personalized recommendations, and creates engaging content, improving the user experience." />
      <Feature title="Education" text="GPT-3 can be used in education to provide instant feedback, generate customized learning materials, language translation, and facilitate assessments, enhancing the learning experience." />
    </div>
  </div>
);

export default WhatGPT3;
