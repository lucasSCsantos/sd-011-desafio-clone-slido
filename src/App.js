import { faComments, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm';
import QuestionsList from './components/QuestionsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      question: '',
      name: '',
    };
    this.changeValue = this.changeValue.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onSend() {
    const { question, name } = this.state;
    const completeQuestion = {
      name,
      question,
    };
    this.setState((previous) => ({
      questionList: [...previous.questionList, completeQuestion],
      name: '',
      question: '',
    }));
  }

  changeBorder(event) {
    if (event.target.innerHTML.includes('Questions')) {
      document.querySelector('.bottom-line').style.transform = 'translateX(0px)';
    } else {
      document.querySelector('.bottom-line').style.transform = 'translateX(189px)';
    }
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const comments = <FontAwesomeIcon icon={ faComments } />;
    const poll = <FontAwesomeIcon icon={ faPoll } />;
    const { question, name, questionList } = this.state;
    console.log(questionList);
    return (
      <div className="App">
        <header className="header">
          <div className="header-options">
            <span className="bottom-line" />
            <button type="button" onClick={ this.changeBorder }>
              <span>
                {comments}
                Q&A
              </span>
            </button>
            <button type="button" onClick={ this.changeBorder }>
              <span>
                {poll}
                Answer
              </span>
            </button>
          </div>
        </header>
        <QuestionForm
          func={ this.changeValue }
          name={ name }
          question={ question }
          onSend={ this.onSend }
        />
        <QuestionsList questions={ questionList } />
      </div>
    );
  }
}

export default App;
