import { faComments, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm';
import QuestionsList from './components/QuestionsList';

function App() {
  function changeBorder(event) {
    if (event.target.innerHTML.includes('Questions')) {
      document.querySelector('.bottom-line').style.transform = 'translateX(0px)';
    } else {
      document.querySelector('.bottom-line').style.transform = 'translateX(189px)';
    }
  }

  const comments = <FontAwesomeIcon icon={ faComments } />;
  const poll = <FontAwesomeIcon icon={ faPoll } />;

  return (
    <div className="App">
      <header className="header">
        <div className="header-options">
          <span className="bottom-line" />
          <button type="button" onClick={ changeBorder }>
            <span>
              {comments}
              Q&A
            </span>
          </button>
          <button type="button" onClick={ changeBorder }>
            <span>
              {poll}
              Answer
            </span>
          </button>
        </div>
      </header>
      <QuestionForm />
      <QuestionsList />
    </div>
  );
}

export default App;
