import { Notification } from '../Notifications/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const totalFeedback = total();
  const positivePercentageValue = positivePercentage();
  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentageValue} %</li>
        </ul>
      ) : (
        <Notification notification={'There is no feedback'} />
      )}
    </div>
  );
};

// Statistics.defaultProps = {
//     good: 0,
//   neutral: 0,
//   bad: 0,
//   total: 0,
// }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
