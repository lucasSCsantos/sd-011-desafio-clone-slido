import React from 'react';
import '../style/TextArea.css';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { func, value } = this.props;
    return (
      <div className="totalArea">
        <div className="textArea">
          <label htmlFor="question">
            <textarea
              name="question"
              id="question"
              cols="30"
              rows="5"
              placeholder="Type your question"
              value={ value }
              onChange={ func }
            />
          </label>
        </div>
        <div className="count">
          <p>160</p>
        </div>
      </div>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  func: PropTypes.func,
};

TextArea.defaultProps = {
  value: '',
  func: '',
};

export default TextArea;
