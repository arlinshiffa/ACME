import PropTypes from 'prop-types';
import styles from './price.module.scss';

export default function Price({ price, type }) {
  return (
    <span className={`${styles.price} ${styles[type]}`}>
      Rp
      {price}
    </span>
  );
}

Price.propTypes = {
  price: PropTypes.string,
  type: PropTypes.string,
};

Price.defaultProps = {
  price: '1.000.000',
  type: 'regular',
};
