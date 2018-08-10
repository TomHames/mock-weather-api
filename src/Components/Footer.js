import React from 'react';

//Imports from react-icons
import {FaFacebookF} from 'react-icons/fa';
import {FaGooglePlus} from 'react-icons/fa';
import {FaReddit} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/tom.hames.3" target="_blank">
              <p><FaFacebookF /></p>
            </a>
          </li>
          <li>
            <a
              href="https://plus.google.com/u/0/113284934601551082561"
              target="_blank"
              >
              <p><FaGooglePlus /></p>
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.reddit.com/user/Stoic-tom" target="_blank">
              <p><FaReddit /></p>
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/tom-hames-0036a889/"
              target="_blank"
            >
              <p><FaLinkedin /></p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
