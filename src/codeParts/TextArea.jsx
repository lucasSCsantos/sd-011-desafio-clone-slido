import React from 'react';
import '../style/TextArea.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class TextArea extends React.Component {
  render() {
    const { func, value, click } = this.props;
    const total = 160;
    const positive = <p>{ total - value.length }</p>;
    const negative = <p style={ { color: 'red' } }>{ total - value.length }</p>;
    return (
      <div className="totalArea">
        <div className="textArea">
          <div className="user">
            <FontAwesomeIcon icon={ faUser } />
          </div>
          <label htmlFor="question">
            <textarea
              name="question"
              id="question"
              placeholder="Type your question"
              className="textarea"
              value={ value }
              onChange={ func }
              onClick={ click }
            />
          </label>
        </div>
        <div className="count">
          { ((total - value.length) < 0) ? negative : positive}
        </div>
      </div>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  func: PropTypes.func,
  click: PropTypes.func,
};

TextArea.defaultProps = {
  value: '',
  func: '',
  click: '',
};

export default TextArea;
