import React from 'react';
import PropTypes from 'prop-types';
import css from './State.module.css';

const Notification = ({ showStatistics, good, neutral, bad, total, positivePercentage }) => (
  <section>
    {showStatistics ? (
      <ul>
        <li className={css.listResults}>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive Feedback: {positivePercentage}%</span>
        </li>
      </ul>
    ) : (
      <p>There is no feedback</p>
    )}
  </section>
);

Notification.propTypes = {
  showStatistics: PropTypes.bool.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Notification;
