import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../style/NameArea.css';

class NameArea extends React.Component {
  render() {
    const profile = <FontAwesomeIcon icon={ faUserCircle } />;
    return (
      <div className="nameArea">
        <div className="person">
          {profile}
        </div>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          />
        </label>
        <button type="submit" id="sendButton">Send</button>
      </div>
    );
  }
}

export default NameArea;
