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
      atualizar: 0,
      id: 0,
    };
    this.changeValue = this.changeValue.bind(this);
    this.onSend = this.onSend.bind(this);
    this.upVote = this.upVote.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.sortByOrder = this.sortByOrder.bind(this);
  }

  onSend() {
    const { question, name, id } = this.state;
    const completeQuestion = {
      name,
      question,
      vote: 0,
      id,
    };
    this.setState((previous) => ({
      questionList: [...previous.questionList, completeQuestion],
      name: '',
      question: '',
      id: previous.id + 1,
    }));
  }

  sortByPopularity() {
    const { questionList } = this.state;
    const sortedList = questionList.sort((a, b) => (
      b.vote - a.vote
    ));
    this.setState({
      questionList: sortedList,
    });
  }

  sortByOrder() {
    const { questionList } = this.state;
    const sortedList = questionList.sort((a, b) => (
      a.id - b.id
    ));
    this.setState({
      questionList: sortedList,
    });
  }

  upVote() {
    this.setState((previous) => ({
      atualizar: previous.atualizar + 1,
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
        <QuestionsList
          questions={ questionList }
          upVote={ this.upVote }
          sortPop={ this.sortByPopularity }
          sortOrd={ this.sortByOrder }
        />
      </div>
    );
  }
}

export default App;
