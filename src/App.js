import { faComments, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AnsweredList from './components/AnweredList';
import AskQuestion from './components/AskQuestion';
// import QuestionForm from './components/QuestionForm';
// import QuestionsList from './components/QuestionsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      answeredList: [],
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
    this.filterAnswered = this.filterAnswered.bind(this);
  }

  onSend() {
    const { question, name, id } = this.state;
    const answeredList = this.filterAnswered();
    const stringCode = 16;
    const randomNumber = 16777215;
    const completeQuestion = {
      name,
      question,
      vote: 0,
      id,
      answered: false,
      randomColor: Math.floor(Math.random() * randomNumber).toString(stringCode),
    };
    if (question !== '') {
      this.setState((previous) => ({
        questionList: [...previous.questionList, completeQuestion],
        name: '',
        question: '',
        id: previous.id + 1,
        answeredList,
      }));
    }
  }

  filterAnswered() {
    const { questionList } = this.state;
    return questionList.filter((question) => (
      question.answered === true
    ));
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

  changeBorder({ target }) {
    const bottomLine = document.querySelector('.bottom-line');
    if (target.innerHTML.includes('Questions')) {
      bottomLine.style.transform = 'translateX(0px)';
    } else {
      bottomLine.style.transform = 'translateX(189px)';
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
    const { question, name, questionList, answeredList } = this.state;
    return (
      <div className="App">
        <header className="header">
          <div className="header-options" aria-hidden="true">
            <span className="bottom-line" />
            <button type="button" onClick={ this.changeBorder }>
              <span>
                {comments}
                Questions
              </span>
            </button>
            <button type="button" onClick={ this.changeBorder }>
              <span>
                {poll}
                Answered
              </span>
            </button>
          </div>
        </header>
        <BrowserRouter>
          <Route path="/" exact>
            <AskQuestion
              func={ this.changeValue }
              name={ name }
              question={ question }
              onSend={ this.onSend }
              questions={ questionList }
              upVote={ this.upVote }
              sortPop={ this.sortByPopularity }
              sortOrd={ this.sortByOrder }
            />
          </Route>
          <Route path="/answered">
            <AnsweredList
              questions={ answeredList }
              upVote={ this.upVote }
            />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
