import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './State.module.css';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    showStatistics: false,
  };

  handleClick = (type) => {
    this.setState((prevState) => ({
      [type.toLowerCase()]: prevState[type.toLowerCase()] + 1,
      showStatistics: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { showStatistics } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <section>
        <FeedbackOptions onFeedbackClick={this.handleClick} />

        {this.props.title && <h2>{this.props.title}</h2>}

        {showStatistics ? (
          <ul>
            <li className={css.listResults}>
              <span>Good: {this.state.good}</span>
              <span>Neutral: {this.state.neutral}</span>
              <span>Bad: {this.state.bad}</span>
              <span>Total: {total}</span>
              <span>Positive Feedback: {positivePercentage}%</span>
            </li>
          </ul>
        ) : (
          <p>There is no feedback</p>
        )}
      </section>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  state: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default App;
