import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3>Questions and answers about me</h3>
      <section className="info">
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </section>
      <footer>
        <p>A Ben Wasonga creation</p>
      </footer>
    </div>
  );
}

export default App;
