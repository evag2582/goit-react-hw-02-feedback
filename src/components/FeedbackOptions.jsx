import React from 'react';
import PropTypes from 'prop-types';
import css from './State.module.css';

const FeedbackOptions = ({ onFeedbackClick }) => (
  <ul className={css.listButton}>
    <li>
      <button onClick={() => onFeedbackClick('Good')}>Good</button>
    </li>
    <li>
      <button onClick={() => onFeedbackClick('Neutral')}>Neutral</button>
    </li>
    <li>
      <button onClick={() => onFeedbackClick('Bad')}>Bad</button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;