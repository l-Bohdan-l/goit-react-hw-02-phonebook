import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { Component } from 'react';

export class Feedbcak extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackNum = e => {
    // console.log(e.target.key)
    if (e.target.id === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (e.target.id === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (e.target.id === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const totalValue = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return totalValue;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    const percent = Math.round((this.state.good * 100) / total);
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <ul>
            {Object.keys(this.state).map(key => (
              <li key={key} className={styles.item}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={this.addFeedbackNum}
                  id={key}
                >
                  {key}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback: {this.countPositiveFeedbackPercentage()} %
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
