import './App.scss';
import React from 'react';
import { Component } from 'react';
import { Feedbcak } from './components/Feedback/Feedback';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackNum = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
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
    return (
      <div className="App">
        <header className="App-header">
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.addFeedbackNum}
            />
          </Section>
          <Section>
            <Statistics
              {...this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        </header>
      </div>
    );
  }
}

export default App;
