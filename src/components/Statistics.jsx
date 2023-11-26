import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './State.module.css';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

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
        <Notification
          showStatistics={showStatistics}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
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
