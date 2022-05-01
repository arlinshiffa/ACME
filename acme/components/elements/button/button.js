import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function Button({ text, type }) {
  return (
    <button className={styles.button} type={type}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: '1.000.000',
  type: 'regular',
};
