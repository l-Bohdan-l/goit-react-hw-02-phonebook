import PropTypes from 'prop-types';

export const Container = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Container.defaultProps = {
  title: '',
  children: [],
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
