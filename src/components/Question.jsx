import React from 'react';
import PropTypes from 'prop-types';
import '../style/Question.css';

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div className="question">
        <div className="personName">
          <div className="letter">
            { question.name.charAt(0) }
          </div>
          <div className="texts">
            <h1>
              { question.name ? question.name : 'Anonymous' }
            </h1>
            <p>
              3 hours ago
            </p>
          </div>
        </div>
        <div className="personQuestion">
          <p>
            { question.question }
          </p>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.objectOf(),
};

Question.defaultProps = {
  question: {},
};

export default Question;
