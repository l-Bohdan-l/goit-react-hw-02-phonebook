import PropTypes from 'prop-types';

export const Notification = ({ notification }) => {
  return <p> {notification} </p>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
